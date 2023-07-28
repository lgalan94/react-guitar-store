import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/productDetails.css';
import MoreProductDetails from './MoreProductDetails';
import { CustomButton } from '../components';

const ProductDetails = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(1);

	const { productId } = useParams();

	useEffect(() => {
	  fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
	    .then(result => result.json())
	    .then(data => {
	      setName(data.name);
	      setDescription(data.description);
	      setCategory(data.category);
	      setPrice(data.price)
	    })
	    .catch(error => {
	      console.error(error);
	    });
	}, [productId]);

	  const handleIncrement = () => {
	    setQuantity(quantity + 1);
	  };

	  const handleDecrement = () => {
	    if (quantity > 1) {
	      setQuantity(quantity - 1);
	    }
	  };

	return (
	<>
		<div className="container product-details-container">
			<div className="row">
				<div className="col-lg-6 image__container text-center">
					<img src="../images/guitar.png" alt="Product" className="product-image" />
				</div>
				<div className="details__column col-lg-6 ps-5 pe-5 d-flex flex-column align-self-center">
					<h1 className="product-name"> {name} </h1>
					<div className="d-flex flex-row ratings__column">
						<p className="product__ratings">No Ratings Yet</p>
						<p className="product__sold">2 sold</p>
					</div>
					<p className="product-price">&#8369;{ price }</p>
					<p className="product-description"> { description } </p>
					<div className="quantity-selector mt-3"> <span className="me-3"> Quantity: </span> 
						<div className="quantity__container">
				      <button className="minus-button" onClick={handleDecrement}>
				        -
				      </button>
				      <span className="quantity">{quantity}</span>
				      <button className="plus-button" onClick={handleIncrement}>
				        +
				      </button>
			      </div>
			      <span className="ms-3">
			      	10 pieces available
			      </span>
			    </div> 
					<div className="d-flex flex-row mt-5">
						{/*<button className="checkout-button">Add To Cart</button>
						<button className="buy-now-button">Buy Now</button>*/}
						<CustomButton 
							containerStyles="add-cart__button"
							title="Add To Cart"

						/>
						<Link to='/checkout' className="product__link">
						<CustomButton 
							title="Buy Now"
							containerStyles="buy-now__button"
						/>
						</Link>
					</div>
				</div>
			</div>
    </div>
    <MoreProductDetails />
  </>
	)
}

export default ProductDetails;