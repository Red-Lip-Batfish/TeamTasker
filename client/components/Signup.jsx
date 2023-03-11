// import statements/
import React from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";

// define Signup component
const Signup = (props) => {
  // define onClick functionality for the signup function
  const signupAndLogin = () => {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password
      }),
    })
      .then(results => results.json())
      .then (data => {
        console.log(data);
        navigate({
          pathname: '/home',
          search: `?username=${username}`,
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  // render signup fields and buttons
  return (
    <div className="login">
      <h1>Please Sign Up</h1>
      <input type='text'
          placeholder='Username'
          id='signupUsername'
      // onChange={e => setNewItem(e.target.value)}
      />
      <input type='text'
          placeholder='Password'
          id='signupPassword'
      // onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={signupAndLogin}>Sign Up</button>
      <span><Link to='/'>Already have an account? Log In</Link></span>
    </div>
  )
} 

export default Signup;
