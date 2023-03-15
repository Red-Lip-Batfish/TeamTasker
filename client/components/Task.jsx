import React from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from 'axios';

// define the task component
const Task = (props) => {


  //let random = Math.floor(Math.random() * 99)
  /// render appropriate divs and their values
  return (
    <div>
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
      <button >Save Task</button>
      <button>Delete Task</button>
    </div>
  )
}

export default Task;