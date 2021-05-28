import { Component } from "react";
import ColLeftMenu from "../ColLeftMenu/ColLeftMenu";
import Header from "../Header/Header";
import ContentBlock from "../ContentBlock/ContentBlock";
export class Row extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 shadow-sm">
          <ColLeftMenu />
        </div>

        <div className="col-9">
          <Header />
          <ContentBlock />
        </div>
      </div>
    );
  }
}

export default Row;
