import  { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="col-12 shadow-sm">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
