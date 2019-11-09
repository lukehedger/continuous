import React from "react";
import ReactDOM from "react-dom";

const App = (): React.ReactElement => {
  return <h1 className="app-heading">Continuous</h1>;
};

ReactDOM.render(<App />, document.getElementById("react-root"));
