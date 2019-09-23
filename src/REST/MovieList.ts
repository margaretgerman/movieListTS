import { MOVIE_DB_API_KEY } from '../services/movieDBapi';

export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=${MOVIE_DB_API_KEY}`;
  return fetch(url)
  .then((response) => { 
    return response.json()
    .then((data) => {
        return data.results;
    }).catch((err) => {
        console.log(err);
    }) 
});
};