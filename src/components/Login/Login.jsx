import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';
const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [show,setShow]=useState(false);
    const navigate=useNavigate();
    let location=useLocation();
    const from = location.state?.from?.pathname || "/shop";
    const handleLogin=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
        event.target.reset();
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show? "text" : "password"} name="password" id="" required />
                    <p onClick={()=>setShow(!show)}><small>
                        {
                            show? <span>hide password</span> : <span>show password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>New here? <Link  to='/register'>Sign up!</Link></p>
            </form>
        </div>
    );
};

export default Login;