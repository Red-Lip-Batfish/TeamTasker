// import statements
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Provider from '@reduxjs/toolkit';
import store from './store.js';

// define our parent component Routing, which will route users to different components based on URI endpoints
const Routing = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <App />} />
          <Route path='/' element={ <Login />} />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

// hang our app at the root element
const root = ReactDOM.createRoote(document.getElementById('root'));
root.render(<Routing />);

