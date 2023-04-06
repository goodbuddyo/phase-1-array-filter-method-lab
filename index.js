// Code your solution here

const driverNames = ['Tom', 'Joe', 'Pete'];

function findMatching(drivers, query) {
  return drivers.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log('findMatching');
console.log(findMatching(driverNames, "te"));
console.log(driverNames);

// const driverNames = ['Tom', 'Joe', 'Pete'];

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.startsWith(query));
}

console.log('fuzzyMatch');
console.log(fuzzyMatch(driverNames, "Jo"));
console.log(driverNames);

const arrDriverObj = [
  {
    "hometown": "NYC",
    "name": "Tom"
  },
  {
    "hometown": "Pittsburgh",
    "name": "Bobby"
  },
  {
    "hometown": "Tampa Bay",
    "name": "Bobby"
  }
];

function matchName(drivers, query) {
  const filterName = arrDriverObj.filter(el =>
    el.name === query
  );
  return filterName
}
console.log('matchName');
console.log(matchName(arrDriverObj, "Tom"))
console.log(driverNames);
