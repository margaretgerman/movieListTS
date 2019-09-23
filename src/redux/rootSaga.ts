import movieWatcher from '../Modules/MoviesList/MoviesListSaga';
import { call, all} from 'redux-saga/effects';

export function* rootSaga(){
  yield all([call(movieWatcher)]);
}