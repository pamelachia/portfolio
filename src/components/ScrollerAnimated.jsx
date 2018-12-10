import React, { PureComponent } from "react";
import Scroller from "./Scroller";
import { mq } from "../styles";
import { css } from "emotion";

class ScrollerAnimated extends PureComponent {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        let opacity = 1 - ((window.pageYOffset - 50) / window.innerHeight) * 4;

        opacity = Math.max(0, opacity);

        window.requestAnimationFrame(() => {
            // opacity 100% minus the % of one fourth of the height of the page
            this.el.style.cssText = `opacity: ${opacity}`;
        });
    };

    render() {
        const textStyle = css`
            ${mq.small(css`
                display: none;
            `)};
        `;

        return (
            <div
                ref={el => {
                    this.el = el;
                }}
                style={{ opacity: 1 }}
            >
                <div className={textStyle}>Scroll to learn more about me.</div>
                <Scroller />
            </div>
        );
    }
}

export default ScrollerAnimated;
