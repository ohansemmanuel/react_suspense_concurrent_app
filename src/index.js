import React from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";

import "./index.css";
import App from "./App";
import WithChakraUI from "./WithChakraUI";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <WithChakraUI>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </WithChakraUI>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
