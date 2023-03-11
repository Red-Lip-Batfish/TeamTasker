import React from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";

const Task = (props) => {

  return (
    <div>
      <h1>Title</h1>
      <div>
        <input type='text'
          placeholder='title'
          />
      </div>
      <div>
        <input type='text'
          placeholder='description'
        />
      </div>
      <select>
        <option></option>
        <option></option>
      </select>
      <button>Add Task</button>
      <button>Delete Task</button>
    </div>
  )
}

export default Task;