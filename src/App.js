import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeConsumer } from "styled-components";
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
import Router from "./Routes/Router";
import Store from "./Store/store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    };
  }

  // 로그인 함수,  logged 값을 true로 변경
  // 함수를 state로 해서 props로 전달하려면 생성자 내부에 state 작성
  onLogin = () => {
    this.setState({ logged: true });
  };

  onLogout = () => {
    this.setState({ logged: false });
  };

  render() {
    const { logged, onLogout } = this.state;
    return (
      <>
        <GlobalStyle />
        <Store.Provider value={this.state}>
          <Layout>
            <Header logged={logged} onLogout={onLogout} />
            <Navigation />
            <Content>
              <Router />
            </Content>
          </Layout>
        </Store.Provider>
      </>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    margin:0px;
    padding:0px;
  }
`;

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
