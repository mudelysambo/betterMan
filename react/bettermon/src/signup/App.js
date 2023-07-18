import React, { useState, useEffect } from 'react';
import { SignUp, LogIn, HomePage } from './pages/routes';
import {Routes, Route} from 'react-router-dom';
import BusinessIntelli from './pages/BusinessIntelligence';
import Science from './pages/Science';
import Stem from './pages/Stem';
import Math from './pages/Math';
import It from './pages/InformationTechnology';
import WebD from './pages/WebDevelopment';
import About from './pages/MAbout';
import Engineering from './pages/Engineering';
import './stem.css';

const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

 
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/'} element={ <LogIn setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <HomePage token={token} />} />:""}
        <Route path="/stem" element={<Stem />} />
    <Route path={'/science'} element={<Science />} />
    <Route path={'/engineering'} element={<Engineering />} />
    <Route path={'/math'} element={<Math />} />
    <Route path={'/businessintelli'} element={<BusinessIntelli />} />
      <Route path={'/it'} element={<It />} />
      <Route path={'/web'} element={<WebD />} />
      <Route path={'/about'} element={<About />} />
      </Routes>
     
      
    </div>
  )
}

export default App
