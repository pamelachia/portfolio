import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { colors, fontFamilies } from "../constants";
import InstagramIcon from "../svg-components/InstagramIcon";
import TwitterIcon from "../svg-components/TwitterIcon";

const HEADER_HEIGHT = 70;

class Header extends Component {
    render() {
        const style = css`
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            right: 0;
            height: ${HEADER_HEIGHT}px;
            color: ${colors.babyPowder};
            background-color: ${colors.lightDark};
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: ${fontFamilies.quicksand};
            font-weight: 500;
        `;

        const menuStyle = css`
            margin: 0 auto;
            padding: 0; /* menu is an "ul", must get rid of left margin */
            max-width: 1024px;
            height: 100%;
            list-style: none;
            display: flex;
            flex-grow: 1;
        `;

        const liStyle = css`
            display: flex;
            flex-grow: 1;
            height: 100%;
            font-size: 23px;
            align-items: center;
            cursor: pointer;
        `;

        const lastLiStyle = css`
            flex-grow: 0;
        `;

        const contactStyle = css`
            color: ${colors.maastrichtBlue};
            text-align: right;
            width: 100%;
            margin-left: 20px;
        `;

        const iconStyle = css({
            marginRight: "15px",
            position: "relative",
            top: "1px",
            transition: "color 0.5s ease",
            color: colors.maastrichtBlue,
            ":hover": {
                color: colors.babyPowder
            }
        });

        return (
            <header className={style}>
                <menu className={menuStyle}>
                    <li className={liStyle}>Pamela Chia</li>
                    <li className={cx(liStyle, lastLiStyle)}>
                        <a
                            href="https://twitter.com/chibi_pammy"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <TwitterIcon height={16} fill="currentColor" />
                        </a>
                        <a
                            href="https://www.instagram.com/chibipammy/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <InstagramIcon height={16} fill="currentColor" />
                        </a>
                        <span className={contactStyle}>Contact</span>
                    </li>
                </menu>
            </header>
        );
    }
}

Header.propTypes = {
    activeKey: PropTypes.string
};

export default Header;
