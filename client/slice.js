import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux'

const dispatch = useDispatch();
const initialState = { lists: [] };
export const findInitialState = createAsyncThunk('lists/fetchLists', async () => {

  const fetchedState = await axios.get('/home');
    // .then(results => results)
    // .catch(err => console.log(err));

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
    // action payload: newListId, fetched in the corresponding thunk
    createList(state, action) {
      state.lists.push({...blankList, _id: action.payload});
    },
    // TD - I don't think updateEmptyList is necessary
    /*
    updateEmptyList(state, action){
      axios.post('/updateEmptyArray', {})
    },
    */
    // action payload: updated lists array 
    deleteList(state, action) {
      state.lists = action.payload;
    },
    // action payload: 
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

export const thunks = {

  createListThunk(){
    console.log('in createListThunk')
    return (state, action) => {
      axios.post('/createList',{})
        .then(response => dispatch(listsSlice.reducer.createList(response)))
    }
  },
  
// updateEmptyListThunk(){
//   return async (state, action) => {
//     axios.post('/updateEmptList', {_id: 'test', title: 'title'})
//   }
// },

// deleteListThunk() {
//   return async (state, action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dispatch(deleteList(listIndex));
//     axios.post('/deleteList',{_id:action.payload._id, list:payload.list})
//   }
// },
// //edit action payload here
// addTaskThunk(listIndexAndId) {
//   return (state, action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dispatch(addTask(listIndex));
//     axios.post('/createAndAddTask', { _id: listId, task: '' })
//     .then(response => {
//       if (response.status !== 200) return 'Error in addTaskThunk'
//     });
//   }
// },
// // **edit considering the necessary inputs and outputs for server requests
// deleteTaskThunk(listIndexAndId,){
//   return async (state, action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dipatch(deleteTask(listId));
//     axios.post('/deleteTask', { _id: action.payload._id, task: action.payload.task })
//   }
// },
// //edit later
// saveTaskThunk(listIndexAndId) { 
//   return async (state,action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dipatch(saveTask(listId));
//     axios.post('/saveTask', { _id: listId, task: action.payload })
  
//   }
// },
// //edit later
// moveTaskThunk() { 
//   return async (state, action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dipatch(deleteTask(listId));
//     axios.post('/moveTask', { idOriginal: action.payload.idOriginal, idNew: action.payload.idNew, task: action.payload.task})
//   }
// },

// extraReducersThunk() { 
//   return async (state, action) => {
//     const { listIndex, listId } = listIndexAndId;
//     dipatch(deleteTask(listId));
//     axios.post('/editTask', { _id: listId, task: action.payload })
//   }
// },
  
} 

export const { createList, deleteList, addTask, deleteTask, saveTask, moveTask } = listsSlice.actions;
export default listsSlice;