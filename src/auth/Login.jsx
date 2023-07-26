import React, { useState } from 'react';
import './index.css';
import { CustomButton } from '../components';
import { Link } from 'react-router-dom';

const Login = () => {

	const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');

	  const handleEmailChange = (e) => {
	    setEmail(e.target.value);
	  };

	  const handlePasswordChange = (e) => {
	    setPassword(e.target.value);
	  };

	  const handleLogin = (e) => {
	    e.preventDefault();
	    // Add login logic here
	  };

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 auth__section image__column">
				    <img src="../images/guitar.png" className="mx-auto guitar__image" />
				</div>
				<div className="col-lg-6 input__column">
				<div className="login-page">
			      <h1>LOGIN</h1>
			      <form onSubmit={handleLogin}>
			        <input
			          type="email"
			          placeholder="Email"
			          value={email}
			          onChange={handleEmailChange}
			        />
			        <input
			          type="password"
			          placeholder="Password"
			          value={password}
			          onChange={handlePasswordChange}
			        />
			        <CustomButton 
			        	title="Login"
			        	containerStyles="login__button"
			        />
			        <p>Not yet registered?<Link className="span__login__signup" as = {Link} to = '/sign-up'> Sign-Up Here</Link></p>
			      </form>
			    </div>
				</div>
			</div>
		</div>
	)
}

export default Login;