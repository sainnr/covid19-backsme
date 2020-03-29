import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter, Switch} from "react-router-dom"
import {Landing} from "./pages/Landing"
import {Owners} from "./pages/Owners"
import {Products} from "./pages/Products";
import {ProductCoupons} from "./pages/ProductCoupons";
import {PurchaseCoupon} from "./pages/PurchaseCoupon";
import {Coupon} from "./pages/Coupon";
import {Nav} from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/demo" component={Owners} />
          <Route exact path="/demo/account" component={Owners} />
          <Route exact path="/demo/products" component={Products} />
          <Route exact path="/demo/products/:productId/coupons" component={ProductCoupons} />
          <Route path="/support/:productId/:status?" component={PurchaseCoupon} />
          <Route exact path="/coupon/:couponId" component={Coupon} />
          <Route component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
