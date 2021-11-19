export const getArr = (obj) => {
  let arr = [];
  let allMovies = [];
  let random;

  for (let key in obj) {
    arr = [...arr, ...obj[key]];
  }

  arr.forEach((curObj) => {
    if (curObj.backdrop_path !== null) {
      allMovies.push(curObj);
    }
  });

  // console.log(allMovies);
  random = allMovies[Math.floor(Math.random() * allMovies.length)];
  return random;
  // function randomMovie() {
  //   let random;
  //   random = arr[Math.floor(Math.random() * arr.length)];

  //   if (random && random.backdrop_path !== null) {
  //     return random;
  //   } else if (random && random.backdrop_path === null) {
  //     randomMovie();
  //   }
  // }
  // let result = randomMovie();
  // return result;
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";
