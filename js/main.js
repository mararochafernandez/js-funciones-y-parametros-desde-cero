'use strict';

// Fase 5

const myWordList = [
  {
    text: 'Pencil',
    total: 6,
  },
  {
    text: 'Thermo',
    total: 2,
  },
  {
    text: 'TV',
    total: 8,
  },
  {
    text: 'Phone',
    total: 4,
  },
];

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

writeMyArray(myWordList);
