import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theMovie from "./service/themovie";

const themovie = new theMovie(process.env.REACT_APP_THEMOVIE_API_KEY);
ReactDOM.render(<App themovie={themovie} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
