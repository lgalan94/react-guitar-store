import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoreProductDetails = () => {
	const { productId } = useParams();

	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	useEffect(() => {
	  fetch(`http://localhost:3005/products/${productId}`)
	    .then(result => result.json())
	    .then(data => {
	      setDescription(data.description);
	      setCategory(data.category);
	    })
	    .catch(error => {
	      console.error(error);
	    });
	}, [productId]);

	return (
				<div className="container product-details-container">
					<div className="row">
						<h5 className="specifications">Product Specifications</h5>
						<div className="col-lg-6">

						<div className="d-flex flex-row">
							<div className="d-flex flex-column specifications__column">
								<p>Category</p>
								<p>Stock</p>
								<p>Ships from</p>
							</div>
							<div className="d-flex flex-column">
								<p> { category } </p>
								<p> 10 </p>
								<p> Mondragon, Northern Samar </p>
							</div>
						</div>

						</div>
						<h5 className="prod__description">Product Description</h5>
						<div className="col-lg-6">
						<p> {description} </p>
							
						<div className="d-flex flex-row">
							<div className="d-flex flex-column specifications__column">
								<p>Construction</p>
								<p>Body</p>
								<p>Neck</p>
								<p>Radius</p>
								<p>Fingerboard</p>
								<p>Tremolo</p>
								<p>Hardware</p>
								<p>PickUps</p>
								<p>Pick Guard</p>
								<p>Controls</p>
							</div>
							<div className="d-flex flex-column">
								<p>Set-neck</p>
								<p>Solid-Mahogany + Maple</p>
								<p>Mahogany</p>
								<p>350 mm</p>
								<p>Rosewood</p>
								<p>TOM</p>
								<p>Chrome</p>
								<p>H-H</p>
								<p>IV</p>
								<p>2 Volume, 2 Tone, 3way Lever Switching</p>
							</div>
						</div>

						</div>
					</div>
		    </div>
	)
}

export default MoreProductDetails;