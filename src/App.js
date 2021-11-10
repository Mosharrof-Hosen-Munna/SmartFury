import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
