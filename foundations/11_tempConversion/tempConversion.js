const convertToCelsius = function (far) {
  let result = ((far - 32) * 5) / 9;
  result = +result.toFixed(1);
  return result;
};

const convertToFahrenheit = function (cel) {
  let result = (cel * 9) / 5 + 32;
  result = +result.toFixed(1);

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
