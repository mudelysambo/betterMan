import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/homepage';
import Hero from './components/home/hero/hero';
import Login from './components/home/login';
import Register from './components/home/register';
import Courses  from './components/courses/course';
import BusinessIntelli from './Pages/BusinessIntelligence';
import WebD from './Pages/WebDevelopment';
import Stem from './Pages/Stem';
import Math from './Pages/Math';
import Science from './Pages/Science';
import Engineering from './Pages/Engineering';
import It from './Pages/InformationTechnology';
import About from './Pages/MAbout';

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
          <Route path="/stem" element={<Stem />} />
          <Route path="/science" element={<Science />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/math" element={<Math />} />
          <Route path="/businessintelli" element={<BusinessIntelli />} />
          <Route path="/it" element={<It />} />
          <Route path="/web" element={<WebD />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;