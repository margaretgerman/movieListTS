import { put, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_MOVIES } from './redux/types';
import { getPopularMovies } from '../../REST/MovieList';
import { setMovies } from './redux/actions';

function* getMovies() {
  let movieList = yield call(getPopularMovies);
  yield put(setMovies(movieList));
}

function* movieWatcher() {
    yield takeLatest(REQUEST_MOVIES, getMovies);
}

export default movieWatcher;
