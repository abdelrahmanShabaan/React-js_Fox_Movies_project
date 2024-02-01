import { combineReducers } from "redux";
import FavoriateReducer from "./FavoriateReducer";
import RemoveReducer from "./RemoveReducer";






export default combineReducers({

    // but all reducers
    favoriate : FavoriateReducer,
    deletefavoriate : RemoveReducer


})