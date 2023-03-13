import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = { lists: [] };
const findInitialState = createAsyncThunk('lists/fetchLists', async () => {
  const fetchedState = await fetch('/home')
    .then(results => results.json())
    .then (data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err)
    })
  return fetchedState;
})

const blankList = {
  title: '',
  tasks: [],
  team: '',
  id: undefined,
}

const blankTask = {
  title: '',
  description: '',
  assignment: '',
  currentList: '',
}

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducer: {
    createList(state, action) {
      state.lists.push(blankList);
    },
    deleteList(state, action) {
      state.lists = action.payload;
    },
    addTask(state, action) {
      state.lists[action.payload].tasks.push(blankTask);
    },
    // payload should be an object with two properties, listIndex and taskIndex
    // listIndex should be the index of the current list, and taskIndex should be the
    // index of the current task on the tasks array
    deleteTask(state, action) {
      state.lists[action.payload.listIndex].tasks.splice(action.payload.taskIndex, 1);
    },
    // payload should be an object with three properties, listIndex, taskIndex, and taskDetails.
    // listIndex is the index of the current list; taskIndex is the index of the current task on the 
    // tasks array; taskDetails is an object with all of the task's details
    saveTask(state, action) {
      state.lists[action.payload.listIndex].tasks[action.payload.taskIndex] = action.payload.taskDetails;
    },
    // payload should be an object with four properties: currentListIndex, taskIndex, newListIndex, and taskDetails
    moveTask(state, action) {
      state.lists[action.payload.currentListIndex].tasks.splice(action.payload.taskIndex, 1);
      state.lists[action.payload.newListIndex].tasks.push(action.payload.taskDetails);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(findInitialState.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(findInitialState.fulfilled, (state, action) => {
        state.lists = action.payload;
      })
  }
})

export const { createList, deleteList, addTask, deleteTask, saveTask, moveTask } = listsSlice.actions;
export default listsSlice;