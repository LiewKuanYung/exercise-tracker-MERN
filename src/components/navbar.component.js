import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">ExcerTracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collpase navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Exercises</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}