// import statements
import React from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../slice.js';
import { useNavigate } from 'react-router-dom';

// TO DO:
  // add button functionality
  // in order to access and manipulate state, will you need to implement useSelector and/or useDispatch here?

const Toolbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return(
    <div className = 'toolBar'>
      <div className = 'title'>Team</div>
      <div classname = 'right align'>
        <button onClick={() => dispatch(createList())}>Add List</button>
        <button>Delete All Tasks</button>
        <button onclick={navigate({pathname: '/'})}>Sign Out</button>
      </div>
    </div>
  )

}

export default Toolbar