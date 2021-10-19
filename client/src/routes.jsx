import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/navbar.component';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Products from './screens/Products';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/shop' component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
