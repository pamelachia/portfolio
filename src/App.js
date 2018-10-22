import "./App.css";
import React, { Component } from "react";
import { css } from "emotion";
import Header from "./components/Header";
import { colors, fontFamilies } from "./constants";
import Content from "./components/Content";

class App extends Component {
    state = {
        scrolledTo: ""
    };

    handleScrollTo = key => {
        this.setState({ scrolledTo: key });
    };

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
                <Header onScollTo={this.handleScrollTo} />
                <Content scrolledTo={this.state.scrolledTo} />
            </div>
        );
    }
}

export default App;
