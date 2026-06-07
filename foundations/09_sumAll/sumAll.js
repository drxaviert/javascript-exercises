const sumAll = function (a, b) {
  let arr = [];
  let firstNum, secondNum;

  if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
    if (a <= b) {
      firstNum = a;
      secondNum = b;
    } else {
      firstNum = b;
      secondNum = a;
    }

    for (let i = firstNum; i <= secondNum; i++) {
      arr.push(i);
    }

    return arr.reduce((previous, current) => previous + current);
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
