import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../client';
import '../index.css';

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/homepage')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className='container'>
      <div className='box  form-box'>
       <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='field input'>
        <label for='email'>Email </label>
        <input 
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        </div>
        <div className='field input'>
        <label for='password'>Password  </label>
        <input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />
          </div>
          <div className='field'>
        <button type='submit' className='btn'>
        Login
        </button>
        </div>
      </form>
      Don't have an account? <Link to='/signup'>Sign Up</Link> 
    </div>
    </div>
  
  )
}

export default Login