import React, { useState,useEffect, useContext } from 'react';
import './index.css';
import { CustomButton } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import Swal2 from 'sweetalert2';
import UserContext from '../UserContext.js';

const Login = () => {

		const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const {setUser} = useContext(UserContext);
	  const navigate = useNavigate();

	  const retrieveUserDetails = (token) => {
	  fetch(`${process.env.REACT_APP_API_URL}/user/user-details`, {
	    method: 'GET',
	    headers: {
	      Authorization: `Bearer ${token}`
	    }
	  })
	  .then(result => result.json())
	  .then(data=> {
	    setUser({
	      id: data._id,
	      isAdmin: data.isAdmin
	    })

	    if (data.isAdmin) {
	        navigate('/admin');
	    } else {
	      navigate('/');
	    }

	  })
	}

	  const Login = (e) => {

	    e.preventDefault();

	     fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
	      method: 'POST',
	      headers: {
	        'Content-type' : 'application/json'
	      },
	      body: JSON.stringify({
	        email: email,
	        password: password
	      })
	    })
	    .then(result => result.json())
	    .then(data => {
	    	console.log(data)
	      if (data === false) {
	        
	        Swal2.fire({
	          title: 'Athentication Failed!',
	          icon: 'error',
	          text: 'Check you login details and try again!'
	        })

	      } else {
	        
	        localStorage.setItem('token', data.auth);
	        retrieveUserDetails(data.auth);

	        Swal2.fire({
	          title: 'Login Successful!',
	          icon: 'success'
	        })

	        
	      }
	    })

	  }

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 auth__section image__column">
				    <img src="../images/guitar.png" className="mx-auto guitar__image" />
				</div>
				<div className="col-lg-6 input__column">
				<div className="login-page">
			      <h1>LOGIN</h1>
			      <form onSubmit={Login}>
			        <input
			          type="email"
			          placeholder="Email"
			          value={email}
			          onChange={(e) => setEmail(e.target.value)}
			        />
			        <input
			          type="password"
			          placeholder="Password"
			          value={password}
			          onChange={(e) => setPassword(e.target.value)}
			        />
			        <CustomButton 
			        	title="Login"
			        	containerStyles="login__button"
			        	type="submit"
			        />
			        <p>
			        	Not yet registered?<Link className="span__login__signup" as = {Link} to = '/sign-up'> Sign-Up Here</Link>
			        </p>
			      </form>
			    </div>
				</div>
			</div>
		</div>
	)
}

export default Login;