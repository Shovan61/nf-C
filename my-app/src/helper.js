export const randomMovie = (arr) => {
  let random;
  console.log(arr);
  //   for (let key in obj) {
  //     obj[key].forEach((cur) => {
  //       all.push(cur);
  //     });
  //   }

  random = arr[Math.floor(Math.random() * arr.length)];

  return random;
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";
