import React from 'react';
import Header from '../Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import './pages.css';
import Bag from '../Bag';
import Account from '../Account';
import Address from '../Address';
import SingleItem from '../Single';
import Buy from '../Buy';
import PlaceOrder from '../PlaceOrder';
import TrackOrder from '../TrackOrder';

function Pages () {
  return (
    <Router>
      <div className="pages">
        <Header />
        <Switch>
          <Route exact path="/bag" component={Bag} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/single/:id" component={SingleItem} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/placeorder" component={PlaceOrder} />
          <Route exact path="/trackorder" component={TrackOrder} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default Pages;
