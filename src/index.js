import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import WebFont from "webfontloader";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

WebFont.load({
    google: {
        families: ["Open Sans:300,400,800", "Quicksand:400,500", "sans-serif"]
    }
});

ReactDOM.render(<App />, document.getElementById("root"));
