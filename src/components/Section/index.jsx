import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

class Section extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        outer: PropTypes.node,
        backgroundColor: PropTypes.string.isRequired,
        fillWindowHeight: PropTypes.bool
    };

    render() {
        const style = css`
            background-color: ${this.props.backgroundColor};
            height: ${this.props.fillWindowHeight ? "100vh" : "auto"};
        `;

        return <section className={style}>{this.props.children}</section>;
    }
}

export default Section;
