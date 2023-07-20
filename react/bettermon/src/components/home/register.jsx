import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './hero/hero';

const Register = () => {

  const navigate = useNavigate();

  return (
    <>
        <h1>Register</h1>
        <button  
          className='signup'
          onClick={() => navigate('/hero')}
          >home</button>

        <Router>
            <Routes>
            <Route path="/hero">
            <Hero/>
          </Route>
            </Routes>
        </Router>
    </>
  )
}

export default Register;