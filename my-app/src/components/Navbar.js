import React, { Component } from "react";
import './navbar.css';
class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Student Management Application</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button type="button" class="btn btn-primary">Login</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
