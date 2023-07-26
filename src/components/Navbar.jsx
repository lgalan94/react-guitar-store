import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
		  <div className="container">
		    <a className="navbar-brand" href="#"><img src="https://logowik.com/content/uploads/images/guitar-center-new-20223184.jpg" alt="Bootstrap" width="60" height="44" /> ES Guitar Hub <
		    /a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNav">
		      <ul className="navbar-nav ms-auto">
		        <li className="nav-item">
		          <Nav.Link as = {NavLink} to = '/'>Home</Nav.Link>
		        </li>
		        {/*<li className="nav-item">
		          <Nav.Link as = {NavLink} to = '/products'>Products</Nav.Link>
		        </li>*/}
		        <li className="nav-item">
		          <Nav.Link as = {NavLink} to = '/login'>Login</Nav.Link>
		        </li>
		        <li className="nav-item">
		          <Nav.Link as = {NavLink} to = '/cart'><LuShoppingCart size={20} /></Nav.Link>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default Navbar