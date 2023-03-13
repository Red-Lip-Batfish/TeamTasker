import React from 'react';
import Task from './Task.jsx';

const List = (props) => {

  return (
    <div>
      <Task />
      <button>Add Task</button>
      <button>Delete List</button>
    </div>
  )
}

export default List;