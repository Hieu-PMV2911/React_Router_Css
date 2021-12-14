import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input type="text" placeholder="Enter Your Email..."/>
				<label>Password</label>
				<input type="Password" placeholder="Enter Your Password..."/>
				<button className="loginButton">Login</button>
			</form>
				<button className="loginRegisterButton">
					<Link to='/register' style={{color:'#000', textDecoration:'none'}}>Register</Link>
				</button>
		</div>
	)
}

export default Login
