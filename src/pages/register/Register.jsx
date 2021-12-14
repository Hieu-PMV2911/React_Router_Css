import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
const Register = () => {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Your Name</label>
				<input type="text" placeholder="Enter Your Name..."/>
				<label>Email</label>
				<input type="email" placeholder="Enter Your Email..."/>
				<label>Password</label>
				<input type="Password" placeholder="Enter Your Password..."/>
				<label>Password Again</label>
				<input type="Password" placeholder="Enter Your Password..."/>
				<button className="registerButton">Register</button>
			</form>
				<button className="registerLoginButton">
					<Link to='/login' style={{color:'#000', textDecoration:'none'}}>Login</Link>
				</button>
		</div>
	)
}

export default Register
