import React, { Component } from "react";
import { css, keyframes } from "emotion";

class Appear extends Component {
    state = {
        display: false
    };

    componentDidMount() {
        if (!this.state.display) {
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
            const elPos = this._el.getBoundingClientRect();
            if (elPos.top < window.innerHeight / 1.4) {
                this.setState({
                    display: true
                });

                this.removeListener();
            }
        }
    }

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

        const style = css`
            opacity: ${this.state.display ? 1 : 0};
            animation-duration: 1.5s;
            animation-name: ${this.state.display ? scroll : "none"};
        `;

        return (
            <div ref={el => (this._el = el)}>
                <div className={style}>{this.props.children}</div>
            </div>
        );
    }
}

export default Appear;
