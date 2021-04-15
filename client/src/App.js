import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import TentsList from "./components/tents-list.component"
import ShoesList from "./components/shoes-list.component"
import BackpacksList from "./components/backpacks-list.component";
import SuggestBackpack from "./components/suggest-item/suggest-backpack.component";
import SuggestTent from "./components/suggest-item/suggest-tent.component";
import SuggestShoe from "./components/suggest-item/suggest-shoes.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid px-0">
          
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Gear Closet</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/tents" className="nav-link">Tents</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/shoes" className="nav-link">Shoes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/backpacks" className="nav-link">Backpacks</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false" href="#">
                    Suggest Item
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/suggest/backpacks" className="nav-link">Suggest Backpack</Link></li>
                    <li><Link to="/suggest/tents" className="nav-link">Suggest Tent</Link></li>
                    <li><Link to="/suggest/shoes" className="nav-link">Suggest Shoes</Link></li>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/tents" component={TentsList} />
          <Route path="/shoes" component={ShoesList} />
          <Route path="/backpacks" component={BackpacksList} />
          <Route path="/suggest/tents" component={SuggestTent} />
          <Route path="/suggest/shoes" component={SuggestShoe} />
          <Route path="/suggest/backpacks" component={SuggestBackpack} />
        </div>
      </Router>
    );
  }
}

export default App;
