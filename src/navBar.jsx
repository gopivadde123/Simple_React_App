import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/detail">
                  Detail
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/checkout">
                  CheckOut
                </a>
              </li>
            </ul>
            <form className="d-flex mt-2 mt-sm-0">
              <div className="input-group">
                <span className="input-group-text" id="search">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
