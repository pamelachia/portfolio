import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { fontFamilies } from "../../constants";

class Subtitle extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const style = css`
            font-size: 22px;
            font-family: ${fontFamilies.quicksand};
            font-weight: 400;
            margin-bottom: 11px;
        `;

        return <div className={style}>{this.props.children}</div>;
    }
}

export default Subtitle;
