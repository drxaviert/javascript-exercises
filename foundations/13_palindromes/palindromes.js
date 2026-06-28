const palindromes = function (strArg) {
  let alphabet = "abcdefghjklmnopqrstuvwhyz0123456789";
  let strArr = strArg.toLowerCase().split("");

  // console.log(strArr);

  strArr = strArr.filter((char) => {
    // console.log(char);
    return alphabet.includes(char);
  });

  // console.log(strArr);

  let forward = strArr.join("");
  let backward = strArr.reverse().join("");

  // console.log([forward, backward]);

  if (forward === backward) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
