import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { fontFamilies } from "../../constants";

class Title extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const style = css`
            font-size: 42px;
            font-family: ${fontFamilies.quicksand};
            margin-bottom: 30px;
        `;

        return <div className={style}>{this.props.children}</div>;
    }
}

export default Title;
