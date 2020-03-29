import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter, Switch} from "react-router-dom"
import {Landing} from "./pages/Landing"
import {Owners} from "./pages/Owners"
import {Products} from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/demo" component={Owners} />
        <Route exact path="/demo/account" component={Owners} />
        <Route exact path="/demo/products" component={Products} />
        {/*<Route exact path="/demo/products/:productId/coupons" component={ProductCoupons} />*/}
        {/*<Route exact path="/support/:productId" component={PurchaseCoupon} />*/}
        <Route component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default App