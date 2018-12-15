import React, { Component } from "react";
import { css } from "emotion";
import Subtitle from "../Cards/Subtitle";
import { mq } from "../../styles";
import Accent from "../Cards/Accent";
import Appear from "../Appear";

class Mission extends Component {
    render() {
        const style = css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;
            min-height: 100vh;

            ${mq.small(css`
                flex-direction: column;
            `)};
        `;

        return (
            <Appear>
                <div className={style}>
                    <Subtitle>
                        <p>
                            I am <Accent>REALLY</Accent> passionate about
                            solving difficult problems. I get excited knowing
                            that it isn't something straightforward and that it
                            requires a team of dedicated, creative, and capable
                            people to tackle together.
                        </p>
                        <p>
                            I especially enjoy products and solutions that will
                            enable people to live to their fullest. I want to do
                            my part to make the world a better place.
                        </p>
                        <p>
                            My way of approaching this is by cultivating a
                            strong and unique interdisciplinary approach. I’m
                            interested in the intersection of information,
                            mathematics, psychology, economics, and businesses
                            that transform lives.
                        </p>
                        <p>
                            I am currently building my knowledge and experience
                            across data science, software engineering, and
                            growth hacking.
                        </p>
                    </Subtitle>
                </div>
            </Appear>
        );
    }
}

export default Mission;
