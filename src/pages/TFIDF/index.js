/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Corpus } from "tiny-tfidf-node";
// Config variables

import doc, { fetchMetaData, fetchstemming } from "./googleApi";

// eslint-disable-next-line no-extend-native
Array.prototype.sortBy = function (p) {
  return this.slice(0).sort(function (a, b) {
    return a[p] < b[p] ? 1 : a[p] > b[p] ? -1 : 0;
  });
};

function replaceAll(str, find, replace) {
  var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return str.replace(new RegExp(escapedFind, "g"), replace);
}

export default function TFID() {
  const [corpus, setCorpus] = useState("");
  const [documents, setDocuments] = useState("");
  const [allTerms, setAllTerms] = useState("");

  useEffect(() => {
    if (allTerms.length > 0) return;
    async function fecth() {
      const response = await fetchMetaData();
      const identifiersArr = response.map((item) => item.nama);
      const documentsArrRaw = response.map((item) => item.hasil_observasi);
      const response2 = await fetchstemming();
      const stopwordsArr = getStopwordsArr();
      function getStopwordsArr() {
        return response2
          .filter((item) => +item.Stopword === 1)
          .map((item) => item.Imbuhan);
      }
      const textToReplace = getTextToReplace();
      function getTextToReplace() {
        return response2
          .map((item) => ({
            originTerm: item.Imbuhan,
            replaceTerm: item["Kata Dasar"],
          }))
          .filter((item) => item.originTerm !== item.replaceTerm);
      }

      const replacedDocumentsArrRaw = documentsArrRaw.map((item) => {
        let str = item;
        textToReplace.forEach((item) => {
          str = replaceAll(str, item.originTerm, item.replaceTerm);
        });
        return str;
      });

      const corpusObj = new Corpus(
        identifiersArr,
        replacedDocumentsArrRaw,
        false,
        stopwordsArr,
        2,
        0.75,
      );

      setCorpus(corpusObj);
    }
    fecth();
  }, [allTerms]);

  useEffect(() => {
    if (!corpus) return;
    const documentsArr = corpus?._documents;
    setDocuments(documentsArr);

    console.log("documentsArr", documentsArr);

    let tfArrSetting = [];
    documentsArr?.forEach((value, key) => {
      tfArrSetting?.push(value._termFrequencies);
    });

    let tfArrSetting2 = [];
    tfArrSetting?.map((item) => {
      item?.forEach((value, key) => {
        const obj = {
          term: key,
          tf: value,
          d: documentsArr.size,
          df: corpus?.getCollectionFrequency(key),
          idf: corpus?.getCollectionFrequencyWeight(key),
          weight: Math.log10(
            +documents.size / +corpus?.getCollectionFrequency(key),
          ),
          // weight:
          //   value *
          //   Math.log10(+documents.size / +corpus?.getCollectionFrequency(key)),
        };

        const existingObj = tfArrSetting2.find(
          (item) => item.term === obj.term,
        );

        if (existingObj) {
          const newArr = tfArrSetting2.filter(
            (item) => item.term !== existingObj.term,
          );
          newArr.push({
            ...obj,
            term: key,
            tf: obj.tf + existingObj.tf,
            weight:
              (obj.tf + existingObj.tf) *
              Math.log10(
                +documents.size / +corpus?.getCollectionFrequency(key),
              ),
          });
          tfArrSetting2 = [...newArr];
        }

        if (!existingObj) {
          tfArrSetting2.push(obj);
        }
      });
    });

    const filteredArray = tfArrSetting2.filter((item) => item.idf > 0);

    setAllTerms(filteredArray);
  }, [corpus]);

  async function handleAddResultToSpreadSheet() {
    const resultSheet = await doc.sheetsById[1642808700];
    await resultSheet.clear();
    await resultSheet.setHeaderRow([
      "NO",
      ...Object.keys(allTerms[0]).map((item) => item.toUpperCase()),
    ]);

    const arrayOfRowValues = allTerms.map((item, index) => [
      index + 1,
      item.term,
      item.tf,
      item.d,
      item.df,
      item.idf,
      item.weight,
    ]);

    await resultSheet.addRows(arrayOfRowValues, { insert: true });

    console.log("allTerms", allTerms);
  }

  if (!corpus) return <div>Loading</div>;
  if (!allTerms) return <div>Loading</div>;

  // CORPUS
  // console.log(corpus);
  console.log("all term", corpus.getTerms());
  //   console.log(corpus.getCollectionFrequency('hurricane'))
  //   console.log(corpus.getDocument('California'))
  //   console.log(corpus.getDocumentIdentifiers())
  //   console.log(corpus.getResultsForQuery('hurricane'))
  //   console.log(corpus.getCommonTerms('Jeje', 'Fadil'))
  //   console.log(corpus.getCollectionFrequencyWeight('codajie'))
  //   console.log(corpus.getDocumentVector('Jeje'))
  //   console.log(corpus.getTopTermsForDocument('Jeje'))
  //   console.log(corpus.getResultsForQuery('codajie'))
  console.log("stop words", corpus.getStopwords());

  // DOKUMENT
  //   console.log(document)
  //   console.log(document.getTermFrequency('pas'))
  //   console.log(document.getText())
  //   console.log(document.getLength())
  //   console.log(document.getUniqueTerms())

  // SIMILARITY
  //   console.log(similarity)
  //   console.log(similarity.getDistanceMatrix())

  // const dataArrays = corpus.getTerms().map((item) => ({
  //   item: item,
  // }))

  // const csvFromArrayOfArrays = convertArrayToCSV(dataArrays)
  // console.log(csvFromArrayOfArrays)

  return (
    <div>
      <p>TF IDF MEI</p>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Term</th>
            <th>Tf</th>
            <th>D</th>
            <th>df</th>
            <th>IDF</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {allTerms.sortBy("weight").map((item, index) => (
            <tr key={item.term}>
              <td>{index + 1}</td>
              <td>{item.term}</td>
              <td>{item.tf}</td>
              <td>{documents.size}</td>
              <td>{item.df}</td>
              <td>{item.idf}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddResultToSpreadSheet}>Add to spreadsheet</button>

      {false && (
        <div>
          {corpus.getTerms().map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}
