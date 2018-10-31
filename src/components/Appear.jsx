import React, { PureComponent } from "react";
import { css, keyframes } from "emotion";

const scroll = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
    }
`;

const style = css`
    opacity: 0;
    animation-duration: 1.5s;
`;

const getWindowScrollPosition = () =>
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

const getElementPositionOnDocument = el =>
    el.getBoundingClientRect().top + getWindowScrollPosition();

class Appear extends PureComponent {
    componentDidMount() {
        if (!this.display) {
            this.elPos = getElementPositionOnDocument(this._el);
            window.addEventListener("scroll", this.handleScroll.bind(this));

            // check if we're there before the user actually scrolls
            this.handleScroll();
        }
    }

    componentWillUnmount() {
        this.removeListener();
    }

    removeListener() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

    handleScroll() {
        if (this._el) {
            if (
                this.elPos <
                getWindowScrollPosition() + window.innerHeight / 1.7
            ) {
                this.display = true;
                this.removeListener();
                window.requestAnimationFrame(() => {
                    this._elAnimated.style.cssText = `opacity: 1; animation-name: ${scroll}`;
                });
            }
        }
    }

    render() {
        return (
            <div ref={el => (this._el = el)}>
                <div ref={el => (this._elAnimated = el)} className={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Appear;
