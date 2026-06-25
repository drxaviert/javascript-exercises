const findTheOldest = function (people) {
  return people.reduce((prev, current) => {
    let prevLatestYear, currentLatestYear;

    if ("yearOfDeath" in prev) {
      prevLatestYear = prev["yearOfDeath"];
    } else {
      prevLatestYear = new Date().getFullYear();
    }
    if ("yearOfDeath" in current) {
      currentLatestYear = current["yearOfDeath"];
    } else {
      currentLatestYear = new Date().getFullYear();
    }

    let prevAge = prevLatestYear - prev.yearOfBirth;
    let currentAge = currentLatestYear - current.yearOfBirth;

    if (prevAge >= currentAge) {
      result = prev;
      return prev;
    } else {
      result = current;
      return current;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
