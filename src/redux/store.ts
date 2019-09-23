import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger'; 
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
 
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware, logger),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga);

export default store;

