import React from 'react';
import { useHistory, BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './home.css';
import Login from './login';
import Register from './register';

const Main = () => {

  const history = useHistory();

  return (
    <>
      <div className='main'>
        <h1>BETTERMON</h1>
        <p>START LEARNING TODAY!</p>

        <div className='button'>
          <button 
          className='login'
          onClick={() => history.push("/login")}
          >LOGIN</button>

          <button  
          className='signup'
          onClick={() => history.push('/register')}
          >SIGNUP</button>


        <Router>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/register' component={Register} />
            </Switch>
        </Router>

        </div>
      </div>
    </>
  )
}

export default Main;