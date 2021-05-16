/* eslint-disable */
import React, {useEffect, useState} from 'react'
import {Corpus} from 'tiny-tfidf-node'
// Config variables

import {fetchSpreadsheet, fetchstemming} from './googleApi'

// eslint-disable-next-line no-extend-native
Array.prototype.sortBy = function (p) {
  return this.slice(0).sort(function (a, b) {
    return a[p] < b[p] ? 1 : a[p] > b[p] ? -1 : 0
  })
}

function replaceAll(str, find, replace) {
  var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
  return str.replace(new RegExp(escapedFind, 'g'), replace)
}

function TFID() {
  const [corpus, setCorpus] = useState('')
  const [documents, setDocuments] = useState('')
  const [allTerms, setAllTerms] = useState('')

  useEffect(() => {
    if (allTerms.length > 0) return
    async function fecth() {
      const response = await fetchSpreadsheet()
      const identifiersArr = response.map((item) => item.nama)
      const documentsArrRaw = response.map((item) => item.hasil_observasi)
      const response2 = await fetchstemming()
      const stopwordsArr = response2
        .filter((item) => +item.Stopword === 1)
        .map((item) => item.Imbuhan)

      const textToReplace = response2
        .map((item) => ({
          originTerm: item.Imbuhan,
          replaceTerm: item['Kata Dasar'],
        }))
        .filter((item) => item.originTerm !== item.replaceTerm)

      const replacedDocumentsArrRaw = documentsArrRaw.map((item) => {
        let str = item

        textToReplace.forEach((item) => {
          str = replaceAll(str, item.originTerm, item.replaceTerm)
        })
        return str
      })

      const corpusObj = new Corpus(
        identifiersArr,
        replacedDocumentsArrRaw,
        false,
        stopwordsArr,
        2,
        0.75,
      )

      setCorpus(corpusObj)
    }
    fecth()
  }, [allTerms])

  useEffect(() => {
    if (!corpus) return
    const documentsArr = corpus?._documents
    // const alltermsArr = corpus?.getTerms().map((item) => ({
    //   tf: 0,
    //   term: item,
    //   frequency: corpus?.getCollectionFrequency(item),
    //   idf: corpus?.getCollectionFrequencyWeight(item),
    // }))
    setDocuments(documentsArr)

    let tfArrSetting = []
    documentsArr?.forEach((value, key) => {
      tfArrSetting?.push(value._termFrequencies)
    })

    let tfArrSetting2 = []
    tfArrSetting?.map((item, index) => {
      item?.forEach((value, key) => {
        const obj = {
          term: key,
          tf: value,
          df: corpus?.getCollectionFrequency(key),
          idf: corpus?.getCollectionFrequencyWeight(key),
          idfMei: Math.log10(
            +documents.size / +corpus?.getCollectionFrequency(key),
          ),
        }

        const existingObj = tfArrSetting2.find((item) => item.term === obj.term)

        if (existingObj) {
          const newArr = tfArrSetting2.filter(
            (item) => item.term !== existingObj.term,
          )
          newArr.push({
            ...obj,
            term: key,
            tf: obj.tf + existingObj.tf,
          })
          tfArrSetting2 = [...newArr]
        }

        if (!existingObj) {
          tfArrSetting2.push(obj)
        }
      })
    })

    const filteredArray = tfArrSetting2.filter((item) => item.idf > 0)

    setAllTerms(filteredArray)
  }, [corpus])

  // data palsu
  // const identifier = state.map((item) => item.state)
  // const hasil_observasi = speech

  // let corpus
  // const document = new tfidf.Document(hasil_observasi[0])
  // const similarity = new tfidf.Similarity(corpus)

  // CORPUS
  // console.log('corpus', corpus)
  // console.log('documents', documents)
  // console.log('allTerms', allTerms)
  // console.log(corpus._collectionFrequencies)
  // console.log(corpus.getTerms())
  // console.log(console.log(corpus?.getCollectionFrequency('kopi')))
  //   console.log(corpus.getDocument('California'))
  // console.log(corpus.getDocumentIdentifiers())
  //   console.log(corpus.getCommonTerms('Jeje', 'Fadil'))
  // console.log(corpus.getCollectionFrequencyWeight('codajie'))
  //   console.log(corpus.getDocumentVector('Jeje'))
  //   console.log(corpus.getTopTermsForDocument('Jeje'))
  //   console.log(corpus.getResultsForQuery('codajie'))
  // console.log(corpus.getStopwords())

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

  // const allTerm = corpus?.getTerms()
  // console.log('allTerm', allTerm)
  // const collectionFrequencies = allTerm?.map((item) => ({
  //   term: item,
  //   frequency: corpus?.getCollectionFrequency(item),
  // }))
  // console.log('collectionFrequencies', collectionFrequencies)

  console.log('object')

  if (!corpus) return <div>Loading</div>
  if (!allTerms) return <div>Loading</div>

  return (
    <div>
      TF IDF
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Term</th>
            <th>Tf</th>
            <th>D</th>
            <th>df</th>
            {/* <th>IDF System</th> */}
            <th>IDF</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {allTerms.sortBy('idfMei').map((item, index) => (
            <tr key={item.term}>
              <td>{index + 1}</td>
              <td>{item.term}</td>
              <td>{item.tf}</td>
              <td>{documents.size}</td>
              <td>{item.df}</td>
              {/* <td>{item.idf}</td> */}
              <td>{item.idfMei}</td>
              <td>{item.idfMei + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {corpus.getTerms().map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TFID
