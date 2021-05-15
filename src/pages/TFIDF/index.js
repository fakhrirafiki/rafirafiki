/* eslint-disable */
import React, {useEffect, useState} from 'react'
import tfidf, {Corpus} from 'tiny-tfidf-node'
// Config variables

import {fetchSpreadsheet, fetchstemming} from './googleApi'

// import state from '../../assets/json/dataExample.json'
// import speech from '../../assets/json/speeches.json'

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
    async function fecth() {
      const response = await fetchSpreadsheet()
      const identifiersArr = response.map((item) => item.nama)
      const documentsArrRaw = response.map((item) => item.hasil_observasi)
      const response2 = await fetchstemming()
      const stopwordsArr = response2
        .filter((item) => +item.Stopword === 1)
        .map((item) => item.Imbuhan)

      const corpusObj = await new Corpus(
        identifiersArr,
        documentsArrRaw,
        false,
        stopwordsArr,
        2,
        0.75,
      )

      setCorpus(corpusObj)
    }
    fecth()
  }, [])

  useEffect(() => {
    if (!corpus) return
    const documentsArr = corpus?._documents
    const alltermsArr = corpus?.getTerms().map((item) => ({
      tf: 0,
      term: item,
      frequency: corpus?.getCollectionFrequency(item),
      idf: corpus?.getCollectionFrequencyWeight(item),
    }))
    setDocuments(documentsArr)
    setAllTerms(alltermsArr)

    let tfArrSetting = []
    documentsArr.forEach((value, key) => {
      tfArrSetting.push(value._termFrequencies)
    })

    let tfArrSetting2 = []
    tfArrSetting.map((item, index) => {
      item.forEach((value, key) => {
        const obj = {
          name: key,
          qty: value,
        }

        const existingObj = tfArrSetting2.find((item) => item.name === obj.name)

        if (existingObj) {
          const newArr = tfArrSetting2.filter(
            (item) => item.name !== existingObj.name,
          )
          newArr.push({
            name: key,
            qty: obj.qty + existingObj.qty,
          })

          tfArrSetting2 = [...newArr]
        }

        if (!existingObj) {
          tfArrSetting2.push(obj)
        }
      })
    })

    console.log(tfArrSetting2)
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

  if (!corpus || !allTerms) return <div>Loading</div>

  return (
    <div>
      TF IDF
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Term</th>
            <th>df</th>
            <th>IDF</th>
          </tr>
        </thead>
        <tbody>
          {allTerms.sortBy('frequency').map((item, index) => (
            <tr key={item.term}>
              <td>{index + 1}</td>
              <td>{item.term}</td>
              <td>{item.frequency}</td>
              <td>{item.idf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TFID
