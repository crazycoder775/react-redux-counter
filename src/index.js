import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import { createStore } from "redux";
import counter from "./reducers";
import { Provider } from "react-redux";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore(counter);

const App = () => (
  <div style={styles}>
    <Hello />
    <h2>This is just a test</h2>
  </div>
);

//store.subscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
