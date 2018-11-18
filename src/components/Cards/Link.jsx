import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { colors } from "../../styles";

const accentTextStyle = css`
    color: ${colors.maastrichtBlue};
    display: inline-block;
    padding-bottom: 1px;
    border-bottom: 1px solid ${colors.maastrichtBlue};
    transition: color 0.5s ease;


    :hover {
        color: ${colors.babyPowder};
        cursor: pointer;
    }
`;

class Link extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <span className={accentTextStyle} onClick={this.props.onClick}>
                {this.props.children}
            </span>
        );
    }
}

export default Link;
