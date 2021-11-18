export const randomMovie = (arr) => {
  let random;

  random = arr[Math.floor(Math.random() * arr.length)];

  return random;
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";
