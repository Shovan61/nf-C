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

  random = allMovies[Math.floor(Math.random() * allMovies.length)];
  return random;
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";
