import React, { PureComponent } from "react";
import { css, keyframes } from "emotion";
import { colors } from "./../constants";

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

// from https://codemyui.com/scroll-icon-animation/, adapted to Emotion
class Scroller extends PureComponent {
    render() {
        return (
            <div className={style}>
                <div className={dotStyle} />
            </div>
        );
    }
}

export default Scroller;
