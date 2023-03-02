import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

//import entitiesReducer from "./entities/entitiesReducer";
//import { slice } from "./auth/Slice";
import authReducer from "./auth/authReducer";
//import uiReducer from "./ui/uiReducer";
//import musicPlayerReducer from "./music/musicPlayer";

const combinedReducers = combineReducers({
  //entities: entitiesReducer,
  auth: authReducer,
  //ui: uiReducer,
  //musicPlayer: musicPlayerReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
