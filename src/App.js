import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./redux/store";
import "./css/Style.css";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}


