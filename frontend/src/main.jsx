import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import AdminRoute from "./Components/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="" element={<PrivateRoute />}>
                <Route path="/shipping" element={<ShippingScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route path="/order/:id" element={<OrderScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Route>
              <Route path="" element={<AdminRoute />}>
                <Route path="admin/orderlist" element={<OrderListScreen />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>
);
