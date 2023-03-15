// import statements
import React from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from 'axios';
// define Login component
const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // define onClick functionality for the login button
  const login = async () => {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    navigate({
      pathname:'/home'
    })
    // const requestBody = { username, password };
    // const data = await axios.post('/login', requestBody)
    //   .then((response) => {
    //     if(response.status === 200) {
    //       navigate({
    //         pathname: '/home',
    //         search: `?username=${username}`});
    //     }});
}

  // render username and password inputs, login and signup buttons
  return(
    <div className="login">
      <h1>Log In</h1>
      <input type='text'
        placeholder='Username'
        id='usernameInput'
      />
      <input type='text'
        placeholder='Password'
        id='passwordInput'
      />
      <button onClick={login}>Log In</button>
      <span><Link to='/signup'>Sign Up</Link></span>
    </div>
  )
};


export default Login;
