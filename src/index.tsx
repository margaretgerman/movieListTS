import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MovieList from './Modules/MoviesList';
import store from './redux/store';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return (
    <Provider store={store}>
      <MovieList  />
      </Provider>);
  }
}

ReactDOM.render(<App name="hooman" />, document.querySelector('#root'));