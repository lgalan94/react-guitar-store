import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProductCard = (props) => {

	const { _id, name, description, category, price } = props.productProp;

	const addToCart = (e) => {
	  e.preventDefault();
	  
	}

	return (		

					<Link to={`/products/${_id}`} className="product__link">
						<div className="product__card">
						  <img src="../images/guitar.png" alt="guitar" className="product__image" />
						  <h1 className="product__name"> {name} </h1>
						  <p className="product__price"> &#8369; {price} </p>
						  <p className="product__category">	<span className="fst-italic"> Category: </span> {category} </p>
						  <div className="d-flex flex-row">  
					    </div>
						</div>
					</Link>
	)
} 

export default ProductCard;
