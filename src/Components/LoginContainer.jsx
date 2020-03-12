import React from "react";
import Store from "../Store/store";
import Login from "./Login";

const LoginContainer = () => {
  return (
    <Store.Consumer>
      {store => {
        console.log(store);
        return <Login onLogin={store.onLogin} />;
      }}
    </Store.Consumer>
  );
};

export default LoginContainer;
