// import { combineReducers } from "redux";
// import {todoReducer} from './todoReducer'
// const rootReducer=combineReducers({
//    todoReducer,
// })
// export default rootReducer
// rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todo1: todoReducer,
  // Add other reducers here if needed
});

export default rootReducer;
