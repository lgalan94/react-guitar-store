import { LuShoppingCart } from "react-icons/lu";
import { NavLink, Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react';
import UserContext from '../UserContext.js';

const Navbar = () => {

	const {user} = useContext(UserContext);
	const [userName, setUserName] = useState('');
	const [cartItem, setCartItem] = useState('');

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/user/user-details`, {
		  method: 'GET',
		  headers: {
		    Authorization: `Bearer ${localStorage.getItem('token')}`
		  }
		})
		.then(result => result.json())
		.then(data => {
				console.log(data)
		   	setUserName(data.userName)
		   	setCartItem(data.shoppingCart)
		})
	}, [])

	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
		  <div className="container">
		    <Link as={Link} to='/' className="navbar-brand"><img src="https://logowik.com/content/uploads/images/guitar-center-new-20223184.jpg" alt="Bootstrap" width="60" height="44" /> ES Guitar Hub <
		    /Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNav">
		      <ul className="navbar-nav ms-auto">
		        <li className="nav-item">
		          <Nav.Link as = {NavLink} to = '/'>Home</Nav.Link>
		        </li>

		        {
		        	user.id !== null 
		        	?
		        	<>
		        	<li className="nav-item">
		        	  <Nav.Link 
		        	  	as = {NavLink} 
		        	  	to = '/cart'>
		        	  	<LuShoppingCart size={20} /> 
		        	  	<span id="item__number"> 
		        	  	{
		        	  		cartItem.length > 0 ? cartItem.length: "0"
		        	  	} 
		        	  	</span>
		        	  </Nav.Link>
		        	</li>
		        	
		        	<li className="nav-item dropdown">
      	        <NavDropdown title={userName} id="dropdown-menu">
      	          <NavDropdown.Item>Profile Info</NavDropdown.Item>
      	          <NavDropdown.Item as={Link} to="/logout" >Logout</NavDropdown.Item>
      	        </NavDropdown>
      	      </li>
		        	
		        	</>
		        	:
		        	<>
		        	<li className="nav-item login__navbtn">
		        	  <Nav.Link as = {NavLink} to = '/login'>Login</Nav.Link>
		        	</li>
		        	<li className="nav-item signup__btn">
		        	  <Nav.Link as = {NavLink} to = '/sign-up'>Register</Nav.Link>
		        	</li>
		        	</>
		        	
		        }

		        


		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default Navbar