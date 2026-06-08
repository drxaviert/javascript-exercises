const removeFromArray = function (arr, ...num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] === num[i]) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
