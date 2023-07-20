import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/homepage';
import Hero from './components/home/hero/hero';
import Login from './components/home/login';
import Register from './components/home/register';
import Courses  from './components/courses/course';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'element ={Home} /> 
          <Route path='/hero'element ={Hero} /> 
          <Route path='/login' element={Login} /> 
          <Route path='/register' element={Register} /> 
          <Route path='/course' element={Courses} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;