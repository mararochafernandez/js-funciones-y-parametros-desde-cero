'use strict';

const API_URL = './api/data.json';

const writeThis = (word, times) => {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
};

const writeMyArray = (array) => {
  for (const item of array) {
    writeThis(item.text, item.total);
  }
};

const getDataFromApi = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => writeMyArray(data.results));
};

getDataFromApi();
