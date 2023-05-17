import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';


const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className='container'>
        <div className='box  form-box'>
        <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className='field input'>
            <label for='username'>Username </label>
        <input 
          placeholder='Username'
          name='fullName'
          onChange={handleChange}
        />
        </div>
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
          Sign Up
        </button>
        </div>
      </form>
      <div className='links'>
     Already have an account? <Link to='/'>Login</Link> 
     </div>
    </div>
    </div>
   
  )
}

export default SignUp