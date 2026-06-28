const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function getAge(birth, death) {
  if (!death) {
    let currentYear = new Date().getFullYear();
    return currentYear - birth;
  } else {
    return death - birth;
  }
}

const findTheOldest = function (people) {
  return people.reduce((prev, curr) => {
    let prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath);
    let currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

    console.log([prevAge, currAge]);

    if (prevAge > currAge) {
      console.log(prev);
      return prev;
    } else {
      console.log(curr);
      return curr;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
