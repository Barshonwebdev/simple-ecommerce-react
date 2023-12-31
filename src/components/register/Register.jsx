import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';
const Register = () => {
  const [error,setError]=useState('');
  const {createUser}= useContext(AuthContext);
  const handleRegister =(event)=>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm=form.confirm.value;
    console.log(email,password,confirm);
    setError('');
    if(password!== confirm ){
      setError('password not matched')
    }
    else if (password.length<6){
      setError('password must be of 6 characters atleast')
    }

    createUser(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error);
      setError(error.message);
    })
    event.target.reset();
  }
    return (
      <div className="form-container">
        <h2 className="form-title">Sign up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Register" />
          <p>
            Already have an account? <Link to="/login">Sign in!</Link>
          </p>
          <small>
            <p className="errormsg">{error}</p>
          </small>
        </form>
      </div>
    );
};

export default Register;