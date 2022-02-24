export function getPeopleInState(arr) {
  const countingHashMap = arr.reduce((accumulator, person) => {
    if (accumulator[person.state]) {
      accumulator[person.state]++;
    } else {
      accumulator[person.state] = 1;
    }
    // console.log(accumulator);
    return accumulator;
  }, {});
  
  const keysArr = Object.entries(countingHashMap);
  // console.log(keysArr);
  const finalArr = keysArr.map((key) => {
    return { 
      state: key[0],
      pop: key[1] 
    };
  });

  // console.log(finalArr);
  return finalArr;
}

export function getStates(arr) {
  const statesArr = [];
  for (let person of arr) {
    if (statesArr.includes(person.state)) {
      () => {};
    } else {
      statesArr.push(person.state);
    }
  }
  // console.log(statesArr);
  return statesArr;
}

export function getPeopleInTimeZones(arr) {
  const countingHashMap = arr.reduce((accumulator, person) => {
    if (accumulator[person.time_zone]) {
      accumulator[person.time_zone]++;
    } else {
      accumulator[person.time_zone] = 1;
    }
    // console.log(accumulator);
    return accumulator;
  }, {});

  const keysArr = Object.entries(countingHashMap);
  // console.log(keysArr);

  const finalArr = keysArr.map((key) => {
    return {
      x: key[0],
      y: key[1]
    };
  });
  // console.log(finalArr);
  return finalArr; 
}

export function getBreakdownOfGenders(arr) {
  const countingHashMap = arr.reduce((accumulator, person) => {
    if (accumulator[person.gender]) {
      accumulator[person.gender]++;
    } else {
      accumulator[person.gender] = 1;
    }
    // console.log('||', accumulator);
    return accumulator;
  }, {});

  const keysArr = Object.entries(countingHashMap);
  // console.log('||', keysArr);

  const finalArr = keysArr.map((key) => {
    return {
      x: key[0],
      y: key[1]
    };
  });
  // console.log('||', finalArr);
  return finalArr;
}