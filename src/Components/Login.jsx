import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    id: "",
    name: "",
    provider: ""
  };

  // Google Login Success
  responseGoogle = res => {
    this.setState({
      id: res.profileObj.googleId,
      name: res.profileObj.name,
      provider: "google"
    });
    console.log(this.state);
    console.log(this.props);
    this.props.onLogin();
    this.props.history.push("/");
  };

  // Logon Fail
  responseFail = err => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId="464101823235-gunon0h7l6e9pnbof7hn3ckc7pi6kgeu.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export default withRouter(Login);
