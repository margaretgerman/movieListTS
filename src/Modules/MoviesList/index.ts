import { connect } from 'react-redux';
import { requestMovies } from './redux/actions';
import MovieList from '../../components/MovieList/';
import { AppState } from '../../redux/reducers';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => ({
    movieList: state.movie.movies
 
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getMoviesFromDB: () => {
          dispatch(requestMovies());
      }
});

export default connect(mapStateToProps,
  mapDispatchToProps
)(MovieList);