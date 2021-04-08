import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import TentsList from "./components/tents-list.component"
import ShoesList from "./components/shoes-list.component"
import BackpacksList from "./components/backpacks-list.component";
import AddBackpack from "./components/add-item/add-backpack.component";
import AddTent from "./components/add-item/add-tent.component";
import AddShoe from "./components/add-item/add-shoes.component";

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
                  <Link to="/shelters" className="nav-link">Tents</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/shoes" className="nav-link">Shoes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/backpacks" className="nav-link">Backpacks</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false" href="#">
                    Add Item
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/add/backpacks" className="nav-link">Add Backpack</Link></li>
                    <li><Link to="/add/shelters" className="nav-link">Add Tent</Link></li>
                    <li><Link to="/add/shoes" className="nav-link">Add Shoes</Link></li>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/shelters" component={TentsList} />
          <Route path="/shoes" component={ShoesList} />
          <Route path="/backpacks" component={BackpacksList} />
          <Route path="/add/shelters" component={AddTent} />
          <Route path="/add/shoes" component={AddShoe} />
          <Route path="/add/backpacks" component={AddBackpack} />
        </div>
      </Router>
    );
  }
}

export default App;
