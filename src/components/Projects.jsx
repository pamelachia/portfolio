import React, { Component } from "react";
import { css } from "emotion";
import Title from "./Section/Title";
import Subtitle from "./Section/Subtitle";
import Material from "./Section/Material";
import Appear from "./Appear";
import Accent from "./Accent";
import { colors } from "./../constants";

const Project = ({ title, imgSrc, children }) => {
    const style = css`
        width: 100%;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        width: 96%;
        height: 100%;
        margin: 10px 0;
        margin-right: 5%;
        border: 2px solid ${colors.maastrichtBlue};
        border-radius: 10px;
        padding: 2%;
    `;

    return (
        <Material>
            <div className={style}>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <Subtitle>{title}</Subtitle>
                {children}
            </div>
        </Material>
    );
};

class Projects extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 28% 28% 28%;
            grid-column-gap: 7.99%;
            grid-row-gap: 50px;
            width: 100%;
            margin-top: 50px;
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        And I run some <Accent>projects</Accent> of my own.
                    </Title>
                    <div className={gridStyle}>
                        <Project
                            title="This portfolio!"
                            imgSrc="img/project-blog.png"
                        >
                            <p>This is my first full-blown personal website!</p>
                            <p>
                                It is made using React.js and using the Emotion
                                CSS-in-JS library, allowing me to quickly create
                                base components and iterate over many (many,
                                many) designs.
                            </p>
                        </Project>
                        <Project
                            title="React-Prevention 🚫"
                            imgSrc="img/project-prevention.png"
                        >
                            <p>
                                A little library that prevents default and stops
                                propagation in JavaScript in a nifty way.
                            </p>
                            <p>
                                What better way to understand a concept than by
                                overengineering a solution for it? And it
                                actually works great. I swear.
                            </p>
                        </Project>
                        <Project
                            title="Sudoku in React.js"
                            imgSrc="img/project-sudoku.png"
                        >
                            <p>My first React.js application!</p>
                            <p>
                                I love playing sudoku and kakuro, so I decided
                                it would be a good starting point to try
                                developing solvers for each along with a
                                graphical interface.
                            </p>
                        </Project>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Projects;
