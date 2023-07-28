import React from 'react';
import './css/checkout.css';
import { CustomButton } from '../components';

const Checkout = () => {
  return (
    <>
    <div className="container ">
      <h1 className="checkout-title mt-5">Proceed to Checkout</h1>
    </div>
    <div className="container checkout-container">
      <div className="d-flex flex-row">
        <div className="column__name">
          <h6 className="delivery__address">Delivery Address</h6>
          <p className="customer__name">Lito Galan Jr</p>
          <p className="customer__contact">09079563771</p>
        </div>
        <div className="col align-self-center">
          <p>BRGY. BUGKO CROSSING (Robert Sari-Sari Store) MONDRAGON NORTHERN SAMAR, Bugko, Mondragon, Visayas</p>
        </div>
        <div className="col align-self-center text-center">
          <CustomButton 
            title="Change Address"
            containerStyles="change__button"
          />
        </div>
      </div>      
    </div>
    <div className="container products-ordered__container mt-3">
    
      <div className="d-flex flex-row mb-5 pt-5">
        <div className="me-auto">
          <h5 className="">Products Ordered</h5>
        </div>

        <div className="d-flex flex-row text-center">
          <div className="unit-price__div">
            <h6>Unit Price</h6>
          </div>

          <div className="quantity__div">
            <h6>Quantity</h6>
          </div>

          <div className="subtotal__div">
            <h6>Item Subtotal</h6>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mb-2">
        <div className="">
          <img src="../images/guitar.png" className="products__checkout-img" />
        </div>

        <div className="ps-5 me-auto align-self-center">
          <p className="mb-0">This is a sample description</p>
        </div>

        <div className="d-flex flex-row text-center align-self-center">
          <div className="unit-price__div-item">
            <h6 className="mb-0">&#8369; 1,999</h6>
          </div>

          <div className="quantity__div-item">
            <h6 className="mb-0">2</h6>
          </div>

          <div className="subtotal__div-item">
            <h6 className="mb-0">&#8369; 3,998</h6>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mb-2">
        <div className="">
          <img src="../images/guitar.png" className="products__checkout-img" />
        </div>

        <div className="ps-5 me-auto align-self-center">
          <p className="mb-0">This is a sample description</p>
        </div>

        <div className="d-flex flex-row text-center align-self-center">
          <div className="unit-price__div-item">
            <h6 className="mb-0">&#8369; 1,999</h6>
          </div>

          <div className="quantity__div-item">
            <h6 className="mb-0">2</h6>
          </div>

          <div className="subtotal__div-item">
            <h6 className="mb-0">&#8369; 3,998</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="container container__total">
      <p className="text-end order__total">Order Total(<small className="fst-italic">2 item</small>): <span> &#8369; 7,996 </span> </p>
    </div>

    <div className="container products-ordered__container mt-3">
      <div className="d-flex flex-row">
        <div className="">
          <h5 className="pb-5 pt-5 me-5">Payment Method</h5>
        </div>
        <div className="align-self-center">
          <CustomButton 
            title="Cash on delivery"
            containerStyles="cod__button"
          />
        </div>
        <div className="align-self-center">
          <CustomButton 
            title="Payment Center/E-Wallet"
            containerStyles="e-wallet__button"
          />
        </div>
      </div> 
    </div>

    <div className="container products-ordered__container p-4">
    <div className="d-flex flex-row">
      <div className="ms-auto merchandise__div me-4">
        <p>Merchandise Subtotal: </p>
        <p>Shipping Total: </p>
        <p>Total Payment: </p>
      </div>

      <div>
        <p>&#8369; 7,996</p>
        <p>&#8369; 200</p>
        <p className="total__payment">&#8369; 8,196</p>
      </div>
    </div>
    </div>

    <div className="container p-5 text-end container__total">
      <div>
      <CustomButton 
        title="Place Order"
        containerStyles="place__order-button"
      />
      </div>
    </div>

    </>
  );
};

export default Checkout;