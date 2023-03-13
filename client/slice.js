import { createSlice } from '@reduxjs/toolkit';
import listsReducer, { initialState } from './reducers';

const listsSlice = createSlice({
  name: 'listsSlice',
  initialState,
  reducer: listsReducer,
})

export const { createList, deleteList } = listsSlice.actions;
export default listsSlice;