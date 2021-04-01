import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import SheltersList from "./components/shelter-list.component"
import ShoesList from "./components/shoes-list.component"
import BackpacksList from "./components/backpacks-list.component";
import AddBackpacks from "./components/add-item/add-backpack.component";
import AddShelters from "./components/add-item/add-shelter.component";
import AddShoes from "./components/add-item/add-shoes.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Gear Closet</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/shelters" className="nav-link">Shelters</Link>
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
                    <li><Link to="/add/shelters" className="nav-link">Add Shelter</Link></li>
                    <li><Link to="/add/shoes" className="nav-link">Add Shoes</Link></li>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/shelters" component={SheltersList} />
          <Route path="/shoes" component={ShoesList} />
          <Route path="/backpacks" component={BackpacksList} />
          <Route path="/add/shelters" component={AddShelters} />
          <Route path="/add/shoes" component={AddShoes} />
          <Route path="/add/backpacks" component={AddBackpacks} />
        </div>
      </Router>
    );
  }
}

export default App;
