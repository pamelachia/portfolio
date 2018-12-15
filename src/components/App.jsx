import "../App.css";
import React, { Component } from "react";
import { css } from "emotion";
import Header from "./Header";
import { colors, fontFamilies } from "../styles";
import Section from "./Section";
import Myself from "./Sections/Myself";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contacts from "./Sections/Contacts";
import Mission from "./Sections/Mission";

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
            font-size: 17px;
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
                        <Myself onScollTo={this.handleScrollTo} />
                    </Section>
                    <Section
                        name="mission"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                        fillWindowHeight={true}
                    >
                        <Mission />
                    </Section>
                    <Section
                        name="skills"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                    >
                        <Skills />
                    </Section>
                    <Section
                        name="projects"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                    >
                        <Projects />
                    </Section>
                    <Section
                        name="contacts"
                        scrolledTo={this.state.scrolledTo}
                        backgroundColor={colors.deepDark}
                        fillWindowHeight={true}
                    >
                        <Contacts />
                    </Section>
                </div>
            </div>
        );
    }
}

export default App;
