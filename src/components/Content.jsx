import React, { Component } from "react";
import Section from "./Section";
import Myself from "./Myself";
import Skills from "./Skills";
import Jobs from "./Jobs";
import { colors } from "./../constants";

class Content extends Component {
    render() {
        return (
            <div>
                <Section
                    key="me"
                    backgroundColor={colors.deepDark}
                    fillWindowHeight={true}
                >
                    <Myself />
                </Section>
                <Section key="skills" backgroundColor={colors.deepDark}>
                    <Skills />
                </Section>
                <Section key="jobs" backgroundColor={colors.deepDark}>
                    <Jobs />
                </Section>
            </div>
        );
    }
}

export default Content;
