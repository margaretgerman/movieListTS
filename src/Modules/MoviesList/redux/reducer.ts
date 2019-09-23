import { SET_MOVIES, MovieActionTypes, Movies } from './types';

const initialState: Movies = {
  movies: []
}


export const movieReducer = (state = initialState, action: MovieActionTypes):Movies => {
  switch (action.type) {
    case SET_MOVIES: {
      
      return {
        ...state,
        movies: action.payload
      }
    }

    default:
      return state;
  }
}
