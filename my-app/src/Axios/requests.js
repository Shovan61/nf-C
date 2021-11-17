const API_KEY = "&api_key=6369f30dc672e06fc293aceafd86d8d6";

const requests = {
  fetchPopular: `/discover/movie?sort_by=popularity.desc${API_KEY}`,
  fetchHighRate: `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${API_KEY}`,
  fetchBest: `/discover/movie?primary_release_year=2010&sort_by=vote_average.desc${API_KEY}`,
  fetchNew: `/discover/movie?with_genres=18&primary_release_year=2021${API_KEY}`,
  fetchKids: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${API_KEY}`,
  fetchR: `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${API_KEY}`,
  fetchDrama: `/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10${API_KEY}`,
};

export default requests;
