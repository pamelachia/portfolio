import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import Myself from "./Myself";
import Skills from "./Skills";
import Jobs from "./Jobs";
import Projects from "./Projects";
import { colors } from "./../constants";

class Content extends Component {
    static propTypes = {
        scrolledTo: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <Section
                    name="about"
                    scrolledTo={this.props.scrolledTo}
                    backgroundColor={colors.deepDark}
                    fillWindowHeight={true}
                >
                    <Myself />
                </Section>
                <Section
                    name="skills"
                    scrolledTo={this.props.scrolledTo}
                    backgroundColor={colors.deepDark}
                >
                    <Skills />
                </Section>
                <Section
                    name="jobs"
                    scrolledTo={this.props.scrolledTo}
                    backgroundColor={colors.deepDark}
                >
                    <Jobs />
                </Section>
                <Section
                    name="projects"
                    scrolledTo={this.props.scrolledTo}
                    backgroundColor={colors.deepDark}
                >
                    <Projects />
                </Section>
            </div>
        );
    }
}

export default Content;
