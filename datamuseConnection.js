/**
 * Connection to the datamuse api.
 * 
 * Author: Jordan Chalupka
 */

const querystring = require('querystring');
const datamuse = require('datamuse');

const datamuseConnection = (word) => {
  const parsedWord = querystring.escape(word);
  const query = `words?rel_ant=${parsedWord}`;

  return datamuse.request(query);
};

module.exports = datamuseConnection;
