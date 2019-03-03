import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        children: PropTypes.node.isRequired
    };

    state = {
        hovered: false
    };

    handleOnClick = e => {
        if (this.state.hovered) {
            // don't leave it focused on a mouse click
            e.target.blur();
        }
        this.props.onClick();
    };

    handleOnMouseHoverEnter = () => {
        this.setState({ hovered: true });
    };

    handleOnMouseHoverLeave = () => {
        this.setState({ hovered: false });
    };

    render() {
        return (
            <button
                onMouseEnter={this.handleOnMouseHoverEnter}
                onMouseLeave={this.handleOnMouseHoverLeave}
                onClick={this.handleOnClick}
                className={this.props.className}
            >
                {this.props.children}
            </button>
        );
    }
}
