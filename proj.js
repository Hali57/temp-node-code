const _ = require('lodash');

const arr = [2, [3, [4, [5]]]];
const newArr = _.flattenDeep(arr);

console.log(newArr);