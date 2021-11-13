import NotFound from "./Pages/NotFound/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ScrollToTop from "./utils/ScrollToTop";
import Register from "./Pages/Register/Register";
import PrivateRoute, {
  AuthenticationPrivateRoute,
} from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/product/details/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/order/:productID">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <AuthenticationPrivateRoute path="/account/login">
            <Login></Login>
          </AuthenticationPrivateRoute>
          <AuthenticationPrivateRoute path="/account/register">
            <Register></Register>
          </AuthenticationPrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
