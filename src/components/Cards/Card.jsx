import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { fontFamilies } from "../../styles";

class Card extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const style = css`
            font-family: ${fontFamilies.openSans};
        `;

        return <div className={style}>{this.props.children}</div>;
    }
}

export default Card;
