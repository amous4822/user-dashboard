import Sidebar from "./components/sidebar/Sidebar";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/dashboard/Main";
function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/peakshavingalert" component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
