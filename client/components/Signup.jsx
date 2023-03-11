// import statements/
import React from 'react';
import { Link } from "react-router-dom";

// define Signup component
const Signup = (props) => {
  // define onChange and onClick functionality that isn't passed down as a prop

  // render signup fields and buttons
  return (
    <div className="login">
      <h1>Please Sign Up</h1>
      <input type='text'
          placeholder='Username'
      // onChange={e => setNewItem(e.target.value)}
      />
      <input type='text'
          placeholder='Password'
      // onChange={e => setNewItem(e.target.value)}
      />
      <button>Log In</button>
      <button>Sign Up</button>
    </div>
  )
}

export default Signup;
