import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
// import {ShoppingCart} from './components/shoppingcart';
import {store} from './store/store';
import {Main} from './connect';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import NewProduct from './components/new_product';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
