import React, { Component } from "react";
import withLogin from "./LoginHOC";

export class MyPage extends Component {
  render() {
    return <div>마이 페이지</div>;
  }
}

export default withLogin(MyPage);
