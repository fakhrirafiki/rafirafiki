import React, {useEffect, useState} from 'react'
import tfidf, {Corpus} from 'tiny-tfidf-node'
import {convertArrayToCSV} from 'convert-array-to-csv'
// Config variables

import {fetchSpreadsheet, fetchstemming} from './googleApi'

import state from '../../assets/json/dataExample.json'
import speech from '../../assets/json/speeches.json'

function TFID() {
  const [identifiers, setIdentifiers] = useState('')
  const [documents, setDocuments] = useState('')
  const [stemmingWord, setStemmingWord] = useState('')
  const [stopWords, setStopWords] = useState('')

  useEffect(() => {
    async function fecth() {
      const response = await fetchSpreadsheet()
      setIdentifiers(response.map((item) => item.nama))
      setDocuments(response.map((item) => item.hasil_observasi))
      const response2 = await fetchstemming()
      setStemmingWord(response2)
      setStopWords(
        response2
          .filter((item) => +item.Stopword === 1)
          .map((item) => item.Imbuhan),
      )
    }
    fecth()
  }, [])

  // data palsu
  // const identifier = state.map((item) => item.state)
  // const hasil_observasi = speech

  let corpus
  if (identifiers && documents && stopWords) {
    corpus = new Corpus(identifiers, documents, false, stopWords, 2, 0.75)
    // const document = new tfidf.Document(hasil_observasi[0])
    // const similarity = new tfidf.Similarity(corpus)

    // CORPUS
    console.log(corpus)
    console.log(corpus.getTerms())
    //   console.log(corpus.getCollectionFrequency('hurricane'))
    //   console.log(corpus.getDocument('California'))
    //   console.log(corpus.getDocumentIdentifiers())
    //   console.log(corpus.getResultsForQuery('hurricane'))
    //   console.log(corpus.getCommonTerms('Jeje', 'Fadil'))
    //   console.log(corpus.getCollectionFrequencyWeight('codajie'))
    //   console.log(corpus.getDocumentVector('Jeje'))
    //   console.log(corpus.getTopTermsForDocument('Jeje'))
    //   console.log(corpus.getResultsForQuery('codajie'))
    console.log(corpus.getStopwords())

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
  }
  return <div>TF IDF</div>
}

export default TFID
