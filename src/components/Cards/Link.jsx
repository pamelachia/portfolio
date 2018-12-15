import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { colors } from "../../styles";
import Button from "../Button";

const accentTextStyle = css`
    color: ${colors.maastrichtBlue};
    display: inline-block;
    position: relative;
    top: -1px;
    transition: color 0.5s ease;

    /* for button */
    background: transparent;
    border: none;
    padding: 0;
    font-size: inherit;

    border-bottom: 1px solid ${colors.maastrichtBlue};
    padding-bottom: 1px;

    :hover {
        color: ${colors.babyPowder};
        cursor: pointer;
    }
`;

class Link extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string
    };

    render() {
        if (this.props.href) {
            return (
                <a
                    className={accentTextStyle}
                    href={this.props.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {this.props.children}
                </a>
            );
        }

        return (
            <Button className={accentTextStyle} onClick={this.props.onClick}>
                {this.props.children}
            </Button>
        );
    }
}

export default Link;
