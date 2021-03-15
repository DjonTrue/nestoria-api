import { combineReducers } from "redux";
import bookmarks from "./bookmarks";
import characters from "./characters";

const rootReducer = combineReducers({
    bookmarks,
    characters,
});

export default rootReducer;
