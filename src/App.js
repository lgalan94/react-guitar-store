import { UserProvider } from './UserContext.js';
import { useState, useEffect } from 'react';

// Admin Routes
import { Dashboard } from './admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Master, Cart, ProductDetails, Products, Checkout } from './pages';
import { Navbar } from './components';
import { Login, Logout, SignUp } from './auth';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  useEffect(() => {
      if(localStorage.getItem('token')) {
          fetch(`${process.env.REACT_APP_API_URL}/user/user-details`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(result => result.json())
          .then(data => {
              setUser({
                  id: data._id,
                  isAdmin: data.isAdmin
              })
          })
      }

  }, [])

  const unsetUser = () => {
    localStorage.clear();
  }

  return (
    <UserProvider value = {{ user, setUser, unsetUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Master/>} />
          <Route path = '/products' element = {<Products />} />
          <Route path = '/products/:productId' element = {<ProductDetails />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/logout' element = {<Logout />} />
          <Route path = '/sign-up' element = {<SignUp />} />
          <Route path = '/cart' element = {<Cart />} />
          <Route path = '/checkout' element = {<Checkout />} />

          <Route path = '/admin' element = {<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
