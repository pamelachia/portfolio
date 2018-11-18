import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { mq } from "../styles";

class Section extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        name: PropTypes.string,
        backgroundColor: PropTypes.string.isRequired,
        fillWindowHeight: PropTypes.bool,
        scrolledTo: PropTypes.string
    };

    componentDidUpdate() {
        if (this.props.name === this.props.scrolledTo) {
            this.el.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    render() {
        const style = css`
            background-color: ${this.props.backgroundColor};
            height: ${this.props.fillWindowHeight ? "100vh" : "auto"};
            margin: 0 20px;

            ${mq.small(css`
                height: auto;
            `)};
        `;

        return (
            <section ref={el => (this.el = el)} className={style}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;
