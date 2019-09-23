import { combineReducers } from "redux";
import { movieReducer } from "../../Modules/MoviesList/redux/reducer"

const rootReducer = combineReducers({ movie: movieReducer });
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
