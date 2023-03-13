// import statements
import React from 'react';

// TO DO:
  // add button functionality
  // in order to access and manipulate state, will you need to implement useSelector and/or useDispatch here?

const Toolbar = (props) => {

  return(
    <div className = 'toolBar'>
      <div className = 'title'>Team</div>
      <div classname = 'right align'>
      <button>Add List</button>
      <button>Delete All Tasks</button>
      <button>Sign Out</button>
      </div>
    </div>
  )

}

export default Toolbar