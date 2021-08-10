import Sidebar from "./components/sidebar/Sidebar";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/dashboard/Main";
import AlertState from "./context/alerts/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AlertState>
      <Router>
        <div>
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/" component={Main} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;
