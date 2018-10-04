import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { colors } from "../constants";

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

        // const liCenterStyle = css`
        //     text-align: center;
        //     width: 100%;
        //     margin-left: -25px;
        // `;

        const contactStyle = css`
            color: ${colors.maastrichtBlue};
            font-weight: normal;
            text-align: right;
            width: 100%;
        `;

        const normalFontStyle = css`
            font-weight: 400;
        `;

        return (
            <header className={style}>
                <menu className={menuStyle}>
                    <li className={liStyle}>
                        <span className={normalFontStyle}>Pamela Chia</span>
                    </li>
                    {/* <li className={liStyle}>
                        <div className={liCenterStyle}>
                            Learner {this.renderCircle(colors.roseMadder)}
                        </div>
                    </li>
                    <li className={liStyle}>
                        <div className={liCenterStyle}>
                            Maker {this.renderCircle(colors.maximumBlueGreen)}
                        </div>
                    </li>
                    <li className={liStyle}>
                        <div className={liCenterStyle}>
                            Seeker {this.renderCircle(colors.brightYellow)}
                        </div>
                    </li> */}
                    <li className={liStyle}>
                        <div className={contactStyle}>Contact</div>
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
