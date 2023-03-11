// import statements
import React from 'react';

// TO DO:
  // add button functionality
  // in order to access and manipulate state, will you need to implement useSelector and/or useDispatch here?

const Toolbar = (props) => {

  return(
    <div>
      <button>Add List</button>
      <button>Dark Mode</button>
      <button>Sign Out</button>
    </div>
  )

}

export default Toolbar