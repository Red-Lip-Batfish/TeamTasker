import { createAction, createReducer } from "@reduxjs/toolkit";

const createList = createAction('lists/createList');
const deleteList = createAction('lists/deleteList');

export const initialState = { lists: [] };
const blankList = {
  title: '',
  tasks: [],
  team: '',
  id: undefined,
}

const listsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createList, (state, action) => {
      state.lists.push(blankList);
    })
    .addCase(deleteList, (state, action) => {
      for (let i = 0; i < state.lists.length; i++) {
        if (action.payload === state.lists[i].id) {
          state.lists.splice(i, 1);
        }
      }
    })
    .addDefaultCase((state, action) => state)
})

export default listsReducer;