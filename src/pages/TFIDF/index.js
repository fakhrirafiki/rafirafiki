import React from 'react'
import tfidf, {Corpus} from 'tiny-tfidf-node'
import metadata from '../../assets/json/tfidf.json'

function TFID() {
  const identifier = metadata.map((item) => item.nama)
  const hasil_observasi = metadata.map((item) => item.hasil_observasi)

  const corpus = new Corpus(identifier, hasil_observasi, true, [], 2, 0.75)
  const document = new tfidf.Document(hasil_observasi[0])
  const similarity = new tfidf.Similarity(corpus)
  //   const document = new tfidf.Document(corpus)
  console.log(similarity)
  console.log(document)
  console.log(corpus)

  // CORPUS
  //   console.log(corpus)
  //   console.log(corpus.getTerms())
  //   console.log(corpus.getCollectionFrequency('codajie'))
  //   console.log(corpus.getDocument('Jeje'))
  //   console.log(corpus.getDocumentIdentifiers())
  //   console.log(corpus.getResultsForQuery('Jeje'))
  //   console.log(corpus.getCommonTerms('Jeje', 'Fadil'))
  //   console.log(corpus.getCollectionFrequencyWeight('codajie'))
  //   console.log(corpus.getDocumentVector('Jeje'))
  //   console.log(corpus.getTopTermsForDocument('Jeje'))
  //   console.log(corpus.getResultsForQuery('codajie'))
  //   console.log(corpus.getStopwords())

  // DOKUMENT
  //   console.log(document)
  //   console.log(document.getTermFrequency('pas'))
  //   console.log(document.getText())
  //   console.log(document.getLength())
  //   console.log(document.getUniqueTerms())

  // SIMILARITY
  //   console.log(similarity)
  //   console.log(similarity.getDistanceMatrix())

  return <div>TF IDF</div>
}

export default TFID
