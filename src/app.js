import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Feed } from "./container/Feed";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Feed path="/" />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
