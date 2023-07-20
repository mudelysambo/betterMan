import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './home.css';
import Login from './login';
import Register from './register';

const Main = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='main'>
        <h1>BETTERMAN</h1>
        <p className='starting'>START LEARNING TODAY!</p>

        <p>standard markup language for designed to be displayed in a web browser. It is often technologies such as Cascading Style Sheets and scripting languages such as Cascading Style Sheets and scripting</p>

        <div className='button'>

          <button  
          className='signup'
          onClick={() => navigate('/hero')}
          >Get Started</button>


        <Router>
            <Routes>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/register' component={Register} />
            </Routes>
        </Router>

        </div>
      </div>
    </>
  )
}

export default Main;