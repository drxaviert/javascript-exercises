const repeatString = function (str, num) {
  if (num >= 0) {
    let strReturn = "";
    for (let i = 0; i < num; i++) {
      strReturn += str;
    }
    return strReturn;
  } else {
    return (strReturn = "ERROR");
  }
};

// Do not edit below this line
module.exports = repeatString;
