import "../App.css";
import React, { Component } from "react";
import { css } from "emotion";
import Header from "./Header";
import { colors, fontFamilies } from "../styles";
import Section from "./Section";
import Myself from "./Sections/Myself";
import Skills from "./Sections/Skills";
import Jobs from "./Sections/Jobs";
import Projects from "./Sections/Projects";

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
                <div>
                    <Section
                        name="about"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                        fillWindowHeight={true}
                    >
                        <Myself />
                    </Section>
                    <Section
                        name="skills"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                    >
                        <Skills />
                    </Section>
                    <Section
                        name="jobs"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                    >
                        <Jobs />
                    </Section>
                    <Section
                        name="projects"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                    >
                        <Projects />
                    </Section>
                </div>
            </div>
        );
    }
}

export default App;
