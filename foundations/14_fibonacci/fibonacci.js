const fibonacci = function (num) {
  if (num >= 0) {
    let sequence = [0, 1];

    for (let i = 2; i <= num; i++) {
      let next = sequence.at(-2) + sequence.at(-1);
      sequence.push(next);
    }

    return sequence.at(num);
  } else {
    return "OOPS";
  }
};
// Do not edit below this line
module.exports = fibonacci;
