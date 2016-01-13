/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "./test";

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>Herro App 2!</h2>
        <Test />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)