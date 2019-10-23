import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { colors, fontFamilies, mq } from "../styles";
import InstagramIcon from "../svg-components/InstagramIcon";
import TwitterIcon from "../svg-components/TwitterIcon";
import GoodreadsIcon from "../svg-components/GoodreadsIcon";
import LinkedinIcon from "../svg-components/LinkedinIcon";
import Copier from "./Copier";
import Button from "./Button";

const HEADER_HEIGHT = 70;
const MOBILE_HEADER_HEIGHT = 40;

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

    ${mq.small(css`
        height: ${MOBILE_HEADER_HEIGHT}px;
    `)};
`;

const menuStyle = css`
    margin: 0 20px;
    padding: 0; /* menu is an "ul", must get rid of left margin */
    max-width: 1024px;
    list-style: none;
    display: flex;
    /* flex-grow: 1; On IE11 this will make it look offset so we use width: 100% */
    width: 100%;
    align-items: center;
    height: 60%;
`;

const liStyle = css`
    display: flex;
    item-align: center;
    flex-direction: row;
    height: 100%;
    align-items: center;
    margin-right: 25px;
    font-size: 18px;
    :hover,
    :focus {
        color: ${colors.maastrichtBlue};
    }

    & > button {
        transition: color 0.5s ease;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        font-size: inherit;
        cursor: pointer;
        font-weight: normal;
        font-family: ${fontFamilies.quicksand};
        height: 100%;

        color: ${colors.babyPowder};
        :hover,
        :focus {
            color: ${colors.maastrichtBlue};
        }

        :hover {
            outline: none;
        }
    }

    ${mq.small(css`
        display: none;
        font-size: 16px;
    `)};
`;

const titleStyle = css`
    font-size: 23px;
    border-right: 1px solid ${colors.maastrichtBlue};
    flex-grow: 0;
    padding-right: 25px;
    white-space: nowrap;

    ${mq.small(css`
        display: flex;
        border-right: none;
        padding-right: 0;
    `)};
`;

const edgeLiStyle = css`
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 0;

    ${mq.small(css`
        display: flex;
    `)};
`;

const contactStyle = css`
    margin-left: 10px;
    height: 100%;
    display: flex;

    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        font-family: ${fontFamilies.quicksand};
        transition: color 0.5s ease;
        font-weight: 500;
        color: ${colors.maastrichtBlue};
        white-space: nowrap;
        font-size: 23px;
        cursor: pointer;

        :hover,
        :focus {
            color: ${colors.babyPowder};
        }

        :hover {
            outline: none;
        }

        ${mq.xsmall(css`
            display: none;
        `)};

        ${mq.small(css`
            font-size: 16px;
        `)};
    }
`;

const contactClickAreaStyle = css`
    display: flex;
    height: 100%;
    align-items: center;
    color: ${colors.maastrichtBlue};
`;

const iconStyle = css`
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 15px;
    position: relative;
    top: 1px;
    transition: color 0.5s ease;
    color: ${colors.maastrichtBlue};
    :hover,
    :focus {
        color: ${colors.babyPowder};
    }
`;

class Header extends Component {
    static propTypes = {
        onScollTo: PropTypes.func.isRequired
    };

    handleOnScrollTo = key => () => this.props.onScollTo(key);

    render() {
        return (
            <header className={style}>
                <menu className={menuStyle}>
                    <li className={cx(liStyle, titleStyle)}>
                        <Button onClick={this.handleOnScrollTo("about")}>
                            Pamela Chia
                        </Button>
                    </li>
                    <li className={liStyle}>
                        <Button onClick={this.handleOnScrollTo("mission")}>
                            Mission
                        </Button>
                    </li>
                    <li className={liStyle}>
                        <Button onClick={this.handleOnScrollTo("skills")}>
                            Skills
                        </Button>
                    </li>
                    <li className={liStyle}>
                        <Button onClick={this.handleOnScrollTo("projects")}>
                            Projects
                        </Button>
                    </li>
                    <li className={liStyle}>
                        <Button onClick={this.handleOnScrollTo("contacts")}>
                            Contact
                        </Button>
                    </li>
                    <li className={cx(liStyle, edgeLiStyle)}>
                        <a
                            href="https://goodreads.com/pamelachia"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <GoodreadsIcon height={16} fill="currentColor" />
                        </a>
                        <a
                            href="https://twitter.com/pamelachia_"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <TwitterIcon height={16} fill="currentColor" />
                        </a>
                        <a
                            href="https://www.instagram.com/pamelachia_"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <InstagramIcon height={16} fill="currentColor" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pamela-chia/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={iconStyle}
                        >
                            <LinkedinIcon height={16} fill="currentColor" />
                        </a>
                        <div className={contactStyle}>
                            <Copier side="right">
                                <Button className={contactClickAreaStyle}>
                                    Contact Me
                                </Button>
                            </Copier>
                        </div>
                    </li>
                </menu>
            </header>
        );
    }
}

export default Header;
