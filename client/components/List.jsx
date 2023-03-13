import React from 'react';
import Task from './Task.jsx';
import { useSelector } from 'react-redux';
import * as actions from '../actions.js';


const List = (props) => {

  // capture the array of lists from store in a constant called stateLists
  const stateLists = useSelector((state) => state.reducer.lists)

  // populate an array of tasks with the tasks in the current list's tasks array (from props)
  const arrOfTasks = [];
  for (let i = 0; i < props.tasks.length; i++) {
    const currentTask = props.tasks[i];
    arrOfTasks.push(
      <Task 
        title={currentTask.title}
        description={currentTask.description}
        assignment={currentTask.assignment}
        currentList={currentTask.currentList}
      />
    )
  }

  // define the addTask functionality that will trigger on button click
  const addTask = () => {
    arrOfTasks.push(
      <Task 
        title=''
        description=''
        assignment=''
        currentList=''
      />
    )
  }

  // define the deleteList functionality that will trigger on button click
  const deleteList = () => {
    const updatedList = stateLists.filter(list => list.id !== props.id);
    dispatch(actions.updateLists(updatedList));
  }

  // render the array of tasks and buttons
  return (
    <div>
      <h2>{props.title}</h2>
      {arrOfTasks}
      <button onClick={addTask}>Add Task</button>
      <button onClick={deleteList}>Delete List</button>
    </div>
  )
}

export default List;