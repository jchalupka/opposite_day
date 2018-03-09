/**
 * Module which generates opposite text.
 * 
 * Author: Jordan Chalupka
 */

const datamuseConnection = require('./datamuseConnection');

const opposite = async (sampleText) => {
  const sameCase = (w1, w2) => {
    if (w1[0] === w1[0].toUpperCase()) { // the character is uppercase
      return w2[0].toUpperCase() + w2.slice(1);
    }

    return w2;
  };

  /**
   * Opposite getter
   * Given a word returns the opposite of that word.
   */
  const oppositeGetter = async (word) => {
    return datamuseConnection(word) // { word: '', score: }
      .then((json) => {
        if (json[0] === undefined) {
          return word; // return the original
        }

        console.log(`changed ${word} to ${json[0].word}`);
        return sameCase(word, json[0].word);
      })
      .catch(_ => word); // simply return the original word
  };

  const oppositeText = sampleText.split(' ')
    .map(oppositeGetter)
    .map(p => Promise.resolve(p));

  Promise.all(oppositeText)
    .then((results) => {
      return results.reduce((s, w) => `${s} ${w}`);
    })
    .then(console.log)
    .catch(err => console.error(err));
};

module.exports = opposite;
