import "./App.css";
import React, { Component } from "react";
import { css } from "emotion";
import Header from "./components/Header";
import { colors, fontFamilies } from "./constants";
import Content from "./components/Content";

class App extends Component {
    render() {
        const containerStyle = css`
            background-color: ${colors.deepDark};
            color: ${colors.babyPowder};
            font-family: ${fontFamilies.openSans};
            font-weight: 300;
            font-size: 18px;
            line-height: 1.5;
        `;

        return (
            <div className={containerStyle}>
                <Header />
                <Content />
            </div>
        );
    }
}

export default App;