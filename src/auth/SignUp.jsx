import React, { useState } from 'react';
import './index.css';
import { CustomButton } from '../components';
import { Link } from 'react-router-dom';

const SignUp = () => {

		const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const [userName, setUserName] = useState('');

	  const handleUserNameChange = (e) => {
	    setUserName(e.target.value);
	  };

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
				<div className="col-lg-6 image__column">
				    <img src="../images/guitar.png" className="guitar__image" />
				</div>
				<div className="col-lg-6">
					<div className="sign-up-page">
				      <h1>SIGN UP</h1>
				      <form onSubmit={handleLogin}>
				        <input
				          type="text"
				          placeholder="Username"
				          value={userName}
				          onChange={handleUserNameChange}
				        />
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
				        	title="Sign Up"
				        	containerStyles="sign-up__button"
				        />
				        <p>Have An Account Already?<Link className="span__login__signup" as = {Link} to = '/login'> Login Here</Link></p>
				        
				      </form>
			    </div>
				</div>
			</div>
		</div>
	)
}

export default SignUp;