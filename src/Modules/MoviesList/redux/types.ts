export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';

export interface Movies{
  movies: IMovie[];
}

export interface IMovie {
  title?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
}

interface SetMovies {
  type: typeof SET_MOVIES,
  payload: IMovie[]
};

interface RequestMovies {
  type: typeof REQUEST_MOVIES
};

export type MovieActionTypes = SetMovies | RequestMovies;