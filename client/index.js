// import statements
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ReactDOM  from 'react-dom/client';
 
// define our parent component Routing, which will route users to different components based on URI endpoints
const Routing = () => {
  return (
      <Router>
        <Routes>
          <Route path='/home' element={ <App />} />
          <Route path='/' element={ <Login />} />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
      </Router>
  );
}

// hang our app at the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);

// there's an error React.createElement type is invalid --> we believe this is because
// we are importing and using an App component that hasn't beeen defined or exported yet