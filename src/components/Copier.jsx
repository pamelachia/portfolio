import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "emotion";
import CopyToClipboard from "react-copy-to-clipboard";
import { colors, fontFamilies, mq } from "../styles";

const drop = keyframes`
    from {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translateY(30px);
   }
`;

class Copier extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        side: PropTypes.string.isRequired
    };

    state = {
        copied: false
    };

    handleOnCopy = () => {
        if (this.state.copied) {
            return;
        }

        this.setState({ copied: true });
        this.timeout = setTimeout(() => this.setState({ copied: false }), 5000);
    };

    render() {
        const popoverStyle = css`
            position: absolute;
            top: 200%;
            ${this.props.side}: 0;
            width: 320px;
            height: 50px;
            font-size: 14px;
            animation-duration: 5s;
            animation-name: ${drop};
            opacity: 0;
            text-align: center;
            background: ${colors.deepDark};
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 2px solid ${colors.maastrichtBlue};
            border-radius: 10px;
            color: ${colors.babyPowder};
            font-family: ${fontFamilies.openSans};

            ${mq.small(css`
                position: fixed;
                top: 100px;
                right: 20px;
                left: 20px;
                width: auto;
            `)};
        `;

        return (
            <div
                className={css`
                    position: relative;
                    cursor: pointer;
                    height: 100%;
                    display: inline-block;
                `}
            >
                <CopyToClipboard
                    // eslint-disable-next-line no-useless-concat
                    text={
                        "pam" +
                        "el" +
                        "achi" +
                        "amay" +
                        "yee@gm" +
                        "ail" +
                        "." +
                        "co" +
                        "m"
                    }
                    onCopy={this.handleOnCopy}
                >
                    {this.props.children}
                </CopyToClipboard>
                {this.state.copied && (
                    <div className={popoverStyle}>
                        <div>My email address is now in your clipboard!</div>
                    </div>
                )}
            </div>
        );
    }
}

export default Copier;
