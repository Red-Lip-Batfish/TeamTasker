// import statements
import React from 'react';
import { navigate, Link } from "react-router-dom";


// define Login component
const Login = (props) => {
  // define onChange and onClick functionality that isn't passed down as a prop

  // define onClick functionality for the login button
  const login = () => {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    fetch('/login', {
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
          pathname: '/home'
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  // render username and password inputs, login and signup buttons
  return(
    <div className="login">
      <h1>Welcome to Log In</h1>
      <input type='text'
        placeholder='Username'
        id='usernameInput'
        // onChange={e => setNewItem(e.target.value)}
      />
      <input type='text'
        placeholder='Password'
        id='passwordInput'
      // onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={login}>Log In</button>
      <span><Link to='/signup'>Sign Up</Link></span>
    </div>
  )
};


export default Login;
