import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import listsReducer from "./reducers";
import listsSlice, { createList, deleteList } from './slice.js';
import { initialState } from "./reducers";


const store = configureStore({
  reducer: listsSlice.reducer,
  initialState,
})

export default store;