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

const AVATAR_SIZE = 300;
const MOBILE_AVATAR_SIZE = 200;

const Avatar = () => {
    const style = css`
        background-image: url("${AvatarImg}");
        background-size: contain;
        width: ${AVATAR_SIZE}px;
        height: ${AVATAR_SIZE}px;
        border-radius: ${AVATAR_SIZE / 6}px;
        overflow: hidden;

        ${mq.small(css`
            width: ${MOBILE_AVATAR_SIZE}px;
            height: ${MOBILE_AVATAR_SIZE}px;
            border-radius: ${MOBILE_AVATAR_SIZE / 6}px;
        `)};
    `;

    const wrapperStyle = css`
        border-radius: ${AVATAR_SIZE / 5}px;
        border: 3px solid ${colors.maastrichtBlue};
        padding: 10px;
        margin-bottom: 10px;
        display: inline-block;
        overflow: hidden;
        flex-shrink: 0;

        ${mq.small(css`
            padding: 5px;
            border-radius: ${MOBILE_AVATAR_SIZE / 5}px;
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
                        <Subtitle>
                            <p>
                                Currently, I am working with all things{" "}
                                <Accent>data</Accent> at Vase.ai.
                            </p>
                            <p>
                                I am passionate about solving difficult problems
                                that make the world a better place and allow
                                everyone to truly live to their fullest
                                potential.
                            </p>
                            <p>
                                My way of approaching this is by cultivating a
                                strong interdisciplinary approach. I’m
                                interested in the intersection of information,
                                mathematics, psychology, economics, and
                                businesses that transform lives.
                            </p>
                            <p>
                                I am currently building my interdisciplinary
                                knowledge and experience across data science,
                                software engineering, and growth hacking.
                            </p>
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
                    <Avatar />
                </div>

                <ScrollerAnimated />
            </div>
        );
    }
}

export default Myself;
