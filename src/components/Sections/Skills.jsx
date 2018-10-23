import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";

const Skill = ({ title, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        width: 20%;
        height: 20%;
        margin-right: 5%;
    `;

    return (
        <div className={style}>
            {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
            <div>
                <Subtitle>{title}</Subtitle>
                {children}
            </div>
        </div>
    );
};

class Skills extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 45% 45%;
            grid-column-gap: 10%;
            grid-row-gap: 50px;
            width: 100%;
            margin-top: 50px;
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        I have some <Accent>skills</Accent>.
                    </Title>
                    <div className={gridStyle}>
                        <Card>
                            <Skill
                                imgSrc="img/gametheory.png"
                                title=" Game Theory (economics)"
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill
                                imgSrc="img/python.png"
                                title="Python development"
                            >
                                <p>
                                    Dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill
                                imgSrc="img/maths.png"
                                title="Mathematics"
                            >
                                <p>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill
                                imgSrc="img/javascript.png"
                                title="JavaScript development"
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Skill>
                        </Card>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Skills;
