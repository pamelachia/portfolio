import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { colors } from "../constants";
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
            font-size: 21px;
            align-items: center;
            cursor: pointer;
        `;

        const contactStyle = css`
            color: ${colors.maastrichtBlue};
            font-weight: normal;
            text-align: right;
            width: 100%;
        `;

        const iconStyle = css({
            marginRight: "10px",
            transition: "color 0.5s ease",
            color: colors.maastrichtBlue,
            ":hover": {
                color: colors.babyPowder
            }
        });

        const normalFontStyle = css`
            font-weight: 400;
        `;

        return (
            <header className={style}>
                <menu className={menuStyle}>
                    <li className={liStyle}>
                        <span className={normalFontStyle}>Pamela Chia</span>
                    </li>
                    <li className={liStyle}>
                        <div className={contactStyle}>
                            <a
                                href="https://twitter.com/chibi_pammy"
                                target="_blank"
                                className={iconStyle}
                            >
                                <TwitterIcon height={15} fill="currentColor" />
                            </a>
                            <a
                                href="https://www.instagram.com/chibipammy/"
                                target="_blank"
                                className={iconStyle}
                            >
                                <InstagramIcon
                                    height={15}
                                    fill="currentColor"
                                />
                            </a>
                            Contact
                        </div>
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
