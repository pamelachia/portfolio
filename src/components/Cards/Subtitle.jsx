import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { fontFamilies, mq } from "../../styles";

class Subtitle extends Component {
    static propTypes = {
        disableMargin: PropTypes.bool,
        children: PropTypes.node.isRequired
    };

    render() {
        const style = css`
            font-size: 22px;
            font-family: ${fontFamilies.quicksand};
            font-weight: 400;
            margin-bottom: ${this.props.disableMargin ? 0 : 11}px;

            ${mq.small(css`
                font-size: 18px;
            `)};
        `;

        return <div className={style}>{this.props.children}</div>;
    }
}

export default Subtitle;
