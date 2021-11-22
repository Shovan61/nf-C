function isPalindrome(...args) {
  let map = new Map();

  args.forEach((cur, i) => {
    map.set(i, cur);
  });

  let reversed = args.reverse();

  let found = [];

  reversed.forEach((cur, i) => {
    if (cur !== map.get(i)) {
      found.push(cur);
    }
  });

  return found.length === 0 ? true : false;
}

console.log(isPalindrome(1, 2));
