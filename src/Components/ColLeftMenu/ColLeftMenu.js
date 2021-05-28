import { Component } from "react";

export class ColLeftMenu extends Component {
  render() {
    return (
      <ul className="nav flex-column justify-content-center">
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
    );
  }
}

export default ColLeftMenu;
