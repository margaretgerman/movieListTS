import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableRow,
  TableHead, Container, CardMedia } from '@material-ui/core';

const url = 'https://image.tmdb.org/t/p/w1280/';

const styles = 
{
  media: {
    minHeight: '30vh',
    width: 'auto'
  }};

  interface IMovie {
    title?: string;
    poster_path?: string;
    release_date?: string;
    vote_average: number;
  }

  interface MovieProps {
    movieList?: IMovie[];
    getMoviesFromDB?: ()=>void;
  }
  
 export default class MovieList extends React.Component<MovieProps, {}> {
  constructor(props: MovieProps) {
    super(props);
  }

  componentDidMount(){
    this.props.getMoviesFromDB();
  }
    render() {
      const { movieList } = this.props;
      return  <Container component="main" maxWidth="sm">
         <Paper>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell align="center">Poster</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Release date</TableCell>
            <TableCell align="center">Stars</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(movieList ? movieList : []).map(movie => (
              <TableRow key={movie.title}>
                <TableCell
                  style={{ width: '30vw' }}>
                <CardMedia
                  image={url + movie.poster_path}
                  style={styles.media}
                /></TableCell>
                <TableCell align="center">{movie.title}</TableCell>
                <TableCell align="center">{movie.release_date}</TableCell>
                <TableCell align="center">{movie.vote_average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
        </Container>
    }
  }