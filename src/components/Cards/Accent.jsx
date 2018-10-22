import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { colors } from "../../styles";

const accentTextStyle = css`
    color: ${colors.maastrichtBlue};
`;

class Accent extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        return <span className={accentTextStyle}>{this.props.children}</span>;
    }
}

export default Accent;
