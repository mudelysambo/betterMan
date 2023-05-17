import React from 'react';
import { useHistory, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './hero/hero';

const Register = () => {

  const history = useHistory();

  return (
    <>
        <h1>Register</h1>
        <button  
          className='signup'
          onClick={() => history.push('/hero')}
          >home</button>

        <Router>
            <Switch>
            <Route path="/hero">
            <Hero/>
          </Route>
            </Switch>
        </Router>
    </>
  )
}

export default Register;