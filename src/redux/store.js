// src/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import myReducer from "./reducer/myReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  myData: myReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Apply Thunk middleware
  );
  
  export default store;
  
