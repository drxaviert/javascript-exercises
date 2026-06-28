const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function (array) {
  return array.reduce((product, num) => product * num, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array.reduce((product, num) => product * num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
