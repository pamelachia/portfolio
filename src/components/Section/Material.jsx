import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { fontFamilies } from "../../constants";

class Material extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const style = css`
            font-size: 16px;
            font-family: ${fontFamilies.openSans};
        `;

        return <div className={style}>{this.props.children}</div>;
    }
}

export default Material;
