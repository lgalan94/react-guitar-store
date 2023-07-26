import { UserProvider } from './UserContext.js';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Master, Cart, ProductDetails, Products } from './pages';
import { Navbar } from './components';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

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
          <Route path = '/sign-up' element = {<SignUp />} />
          <Route path = '/cart' element = {<Cart />} />
          
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
