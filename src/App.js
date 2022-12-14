import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import belinasiApi from "./apis/belinasiApi";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import OrderList from "./pages/OrderList/";
import CampaignList from "./pages/CampaignList/";
import Product from "./pages/product/Product";
import Campaign from "./pages/Campaign/Campaign";
import Order from "./pages/order/Order";
import NewProduct from "./pages/newProduct/NewProduct";
import Analytics from "./pages/analytics/Analytics";
import Login from "./pages/login/Login";
import Mail from "./pages/mail/Mail";

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", async (e) => {
      e.returnValue = "You will be logged out!";

      await belinasiApi.delete("/users/logout");

      localStorage.removeItem("adminId");

      return "onbeforeunload";
    });
  }, []);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <Home />
          </Route>

          <Route exact path="/admin/analytics">
            <Analytics />
          </Route>

          <Route exact path="/admin/login">
            <Login />
          </Route>

          <Route exact path="/admin/mail">
            <Mail />
          </Route>

          <Route path="/admin/users/:userId">
            <User />
          </Route>
          <Route path="/admin/users">
            <UserList />
          </Route>
          <Route path="/admin/newUser">
            <NewUser />
          </Route>

          <Route path="/admin/products/:productId">
            <Product />
          </Route>
          <Route path="/admin/products">
            <ProductList />
          </Route>

          <Route path="/admin/orders/:orderId">
            <Order />
          </Route>
          <Route path="/admin/orders">
            <OrderList />
          </Route>

          <Route path="/admin/campaigns/:campaignId">
            <Campaign />
          </Route>
          <Route path="/admin/campaigns">
            <CampaignList />
          </Route>

          <Route path="/admin/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
