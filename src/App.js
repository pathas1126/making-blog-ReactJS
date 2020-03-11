import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
import Router from "./Routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Navigation />
        <Content>
          <Router />
        </Content>
      </Layout>
    </>
  );
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
