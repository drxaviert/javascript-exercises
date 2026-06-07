const reverseString = function (str) {
  if (str.includes(" ")) {
    return str
      .split(" ")
      .map((val) => val.split("").reverse().join(""))
      .reverse()
      .join(" ");
  } else {
    return str.split("").reverse().join("");
  }
};

// Do not edit below this line
module.exports = reverseString;
