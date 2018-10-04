import React, { Component } from "react";
import { css, keyframes } from "emotion";
import Title from "./Section/Title";
import Subtitle from "./Section/Subtitle";
import { colors, fontFamilies } from "./../constants";
import Accent from "./Accent";

const AVATAR_SIZE = 300;

// from https://codemyui.com/scroll-icon-animation/, adapted to Emotion
const IconScroll = () => {
    const scroll = keyframes`
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateY(46px);
        }
    `;

    const style = css`
        width: 40px;
        height: 70px;
        margin: 50px auto 50px;
        box-shadow: inset 0 0 0 1px ${colors.babyPowder};
        border-radius: 25px;
        position: relative;
    `;

    const dotStyle = css`
        position: relative;
        width: 8px;
        height: 8px;
        background: ${colors.maastrichtBlue};
        margin-left: -4px;
        top: 8px;
        left: 50%;
        border-radius: 4px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: ${scroll};
    `;

    return (
        <div className={style}>
            <div className={dotStyle} />
        </div>
    );
};

const Avatar = () => {
    const style = css`
        background-image: url("/img/PamelaChia.jpg");
        background-size: contain;
        width: ${AVATAR_SIZE}px;
        height: ${AVATAR_SIZE}px;
        border-radius: ${AVATAR_SIZE / 2}px;
        overflow: hidden;
    `;

    const wrapperStyle = css`
        border-radius: ${AVATAR_SIZE}px;
        border: 5px solid ${colors.maastrichtBlue};
        padding: 5px;
        margin-bottom: 10px;
        display: inline-block;
        overflow: hidden;
        flex-shrink: 0;
    `;

    return (
        <div className={wrapperStyle}>
            <div className={style} />
        </div>
    );
};

class Myself extends Component {
    state = {
        iconScrollOpacity: 1
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        // opacity 100% minus the % of one fourth of the height of the page
        this.setState({
            iconScrollOpacity: 1 - (window.scrollY / window.innerHeight) * 4
        });
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
        `;

        const style = css`
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
        `;

        const textStyle = css`
            margin-right: 150px;
            animation-duration: 1.5s;
            animation-name: ${scroll};
        `;

        const satisfyTextStyle = css`
            font-family: ${fontFamilies.satisfy};
            font-size: 30px;
            line-height: 22px;
            padding-left: 2px;
        `;

        const scrollOpacityStyle = css`
            opacity: ${this.state.iconScrollOpacity};
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
                                I love taking on good challenges <br />
                                and solving crazy-hard problems.
                            </p>
                            <p>
                                I get way too excited over{" "}
                                <span className={satisfyTextStyle}>
                                    pretty words
                                </span>{" "}
                                <br />
                                and mathematical magic ✨.
                            </p>
                            <p>
                                I currently work as at{" "}
                                <Accent>Data Analyst</Accent> at Vase.ai.
                            </p>
                        </Subtitle>
                    </div>
                    <Avatar />
                </div>
                <div className={scrollOpacityStyle}>
                    Scroll to learn more about me.
                    <IconScroll />
                </div>
            </div>
        );
    }
}

export default Myself;
