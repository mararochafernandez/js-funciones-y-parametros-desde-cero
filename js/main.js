'use strict';

// Fase 4

const getRandomNumber = (max) => Math.ceil(Math.random() * max);

const writeThis = (word, times) => {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
};

writeThis('patata', getRandomNumber(10));
writeThis('aguacate', getRandomNumber(10));
writeThis('Pizza', getRandomNumber(10));
