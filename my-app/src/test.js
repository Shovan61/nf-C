function sameFrequency(num1, num2) {
  let arr1 = Array.from(num1.toString()).map((cur) => Number(cur));
  let arr2 = Array.from(num2.toString()).map((cur) => Number(cur));

  let map = new Map();

  arr1.forEach((number) => {
    if (!map.get(number)) {
      map.set(number, 1);
    } else {
      map.set(number, map.get(number) + 1);
    }
  });

  arr2.forEach((number) => {
    if (!map.get(number)) {
      map.set(number, 1);
    } else {
      map.set(number, map.get(number) - 1);
    }
  });

  let nonFrequent = [];

  map.forEach((value, key) => {
    if (value !== 0) {
      nonFrequent.push(key);
    }
  });

  if (nonFrequent.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(sameFrequency(182, 281));
