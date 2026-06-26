const palindromes = function (strArg) {
  let strArr = strArg
    .split("")
    .map((letter) => letter.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""))
    .filter((letter) => letter != "");

  let strFirstHalf = strArr.slice(0, Math.ceil(strArr.length / 2)).join("");
  let strSecondHalf = strArr
    .slice(Math.floor(strArr.length / 2))
    .reverse()
    .join("");

  if (strFirstHalf === strSecondHalf) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
