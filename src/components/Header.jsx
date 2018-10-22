import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { colors, fontFamilies } from "../constants";
import InstagramIcon from "../svg-components/InstagramIcon";
import TwitterIcon from "../svg-components/TwitterIcon";
import Copier from "./Copier";

const HEADER_HEIGHT = 70;

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
`;

const menuStyle = css`
    margin: 0 auto;
    padding: 0; /* menu is an "ul", must get rid of left margin */
    max-width: 1024px;
    list-style: none;
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 60%;
`;

const liStyle = css`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    margin-right: 25px;
    font-size: 18px;
`;

const titleStyle = css`
    font-size: 23px;
    border-right: 1px solid ${colors.maastrichtBlue};
    flex-grow: 0;
    padding-right: 25px;
`;

const edgeLiStyle = css`
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 0;
`;

const contactStyle = css`
    color: ${colors.maastrichtBlue};
    margin-left: 10px;
    transition: color 0.5s ease;
    font-weight: 500;
    font-size: 23px;
    :hover {
        color: ${colors.babyPowder};
    }
`;

const iconStyle = css({
    textAlign: "right",
    marginRight: "15px",
    position: "relative",
    top: "1px",
    transition: "color 0.5s ease",
    color: colors.maastrichtBlue,
    ":hover": {
        color: colors.babyPowder
    }
});

class Header extends Component {
    static propTypes = {
        onScollTo: PropTypes.func.isRequired
    };

    handleOnScrollTo = key => () => this.props.onScollTo(key);

    render() {
        return (
            <header className={style}>
                <menu className={menuStyle}>
                    <li className={cx(liStyle, titleStyle)}>Pamela Chia</li>
                    <li
                        onClick={this.handleOnScrollTo("about")}
                        className={liStyle}
                    >
                        About
                    </li>
                    <li
                        onClick={this.handleOnScrollTo("projects")}
                        className={liStyle}
                    >
                        Projects
                    </li>
                    <li
                        onClick={this.handleOnScrollTo("contacts")}
                        className={liStyle}
                    >
                        Contacts
                    </li>
                    <li className={cx(liStyle, edgeLiStyle)}>
                        <div>
                            <a
                                href="https://twitter.com/chibi_pammy"
                                rel="noopener noreferrer"
                                target="_blank"
                                className={iconStyle}
                            >
                                <TwitterIcon height={16} fill="currentColor" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/chibipammy/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className={iconStyle}
                            >
                                <InstagramIcon
                                    height={16}
                                    fill="currentColor"
                                />
                            </a>
                        </div>
                        <div className={contactStyle}>
                            <Copier>
                                <span>Contact Me</span>
                            </Copier>
                        </div>
                    </li>
                </menu>
            </header>
        );
    }
}

export default Header;
