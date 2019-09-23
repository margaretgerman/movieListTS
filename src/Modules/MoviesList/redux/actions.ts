import { REQUEST_MOVIES, SET_MOVIES, MovieActionTypes, IMovie } from './types';

export function requestMovies(): MovieActionTypes{
  return{
    type: REQUEST_MOVIES
  }
};

export function setMovies (movieList: IMovie[]): MovieActionTypes{
  return{
    type: SET_MOVIES,
    payload: movieList 
  }
};

