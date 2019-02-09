import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import "./scss/app.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>{this.props.name}</h1>
          <h5>MODE in {process.env.NODE_ENV}</h5>
        </div>
      </div>
    );
  }
}

function renderApp() {
  render(<App name="React + Parcel1" />, document.getElementById("root"));
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
