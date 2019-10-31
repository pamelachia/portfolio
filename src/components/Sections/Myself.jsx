import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import { colors, fontFamilies, mq } from "../../styles";
import Accent from "../Cards/Accent";
import Link from "../Cards/Link";
import ScrollerAnimated from "../ScrollerAnimated";
import AvatarImg from "../../img/PamelaChia.jpg";

const AVATAR_SIZE = 190;
const MOBILE_AVATAR_SIZE = 130;

const Avatar = ({ isMobile }) => {
    const style = css`
        background-image: url("${AvatarImg}");
        background-size: contain;
        width: ${AVATAR_SIZE}px;
        height: ${AVATAR_SIZE}px;
        border-radius: 3px;
        overflow: hidden;

        ${mq.small(css`
            width: ${MOBILE_AVATAR_SIZE}px;
            height: ${MOBILE_AVATAR_SIZE}px;
            border-radius: ${MOBILE_AVATAR_SIZE / 6}px;
        `)};
    `;

    const wrapperStyle = css`
        border-left: 1px solid ${colors.maastrichtBlue};
        padding: 60px 0 60px 100px;
        overflow: hidden;
        flex-shrink: 0;
        display: ${!isMobile ? "inline-block" : "none"};
        margin: 0 0 0 20px;

        ${mq.small(css`
            display: ${isMobile ? "inline-block" : "none"};
            border: 2px solid ${colors.maastrichtBlue};
            padding: 5px;
            border-radius: ${MOBILE_AVATAR_SIZE / 5}px;
            margin: 0 auto 30px;
        `)};
    `;

    return (
        <div className={wrapperStyle}>
            <div className={style} />
        </div>
    );
};

class Myself extends Component {
    static propTypes = {
        onScollTo: PropTypes.func.isRequired
    };

    render() {
        const scroll = keyframes`
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
            }
        `;

        const wrapperStyle = css`
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;

            ${mq.small(css`
                height: auto;
            `)};
        `;

        const style = css`
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
            width: 100%;

            ${mq.small(css`
                flex-direction: column;
            `)};
        `;

        const textStyle = css`
            flex-grow: 1;
            animation-duration: 1.5s;
            animation-name: ${scroll};

            ${mq.small(css`
                margin-top: 30px;
            `)};
        `;

        const mobileAvatarStyles = css`
            text-align: center;
        `;

        const cvStyle = css`
            margin-top: 55px;
            font-family: ${fontFamilies.quicksand};
        `;

        return (
            <div className={wrapperStyle}>
                <div className={style}>
                    <div className={textStyle}>
                        <Title>
                            I am <Accent>Pamela</Accent>.
                        </Title>
                        <div className={mobileAvatarStyles}>
                            <Avatar isMobile={true} />
                        </div>
                        <Subtitle>
                            I love solving crazy-hard problems that will change
                            the world.
                            <br />
                            Currently, I am working as the{" "}
                            <Accent>Data Engineering Lead</Accent> at Vase.ai.
                        </Subtitle>
                        <div className={cvStyle}>
                            <Link
                                onClick={() => {
                                    this.props.onScollTo("contacts");
                                }}
                            >
                                Let me know
                            </Link>{" "}
                            if you want me to send over my CV/resume.
                        </div>
                    </div>
                    <Avatar isMobile={false} />
                </div>
                <ScrollerAnimated />
            </div>
        );
    }
}

export default Myself;
