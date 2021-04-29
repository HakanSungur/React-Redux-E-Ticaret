import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import 'alertifyjs/build/css/alertify.min.css'
import {BrowserRouter} from "react-router-dom"

const store=configureStore();
ReactDOM.render(
  <BrowserRouter><React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode> </BrowserRouter>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
