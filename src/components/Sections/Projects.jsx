import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq, colors } from "../../styles";
import BlogImg from "../../img/project-blog.png";
import PreventionImg from "../../img/project-prevention.png";
import SudokuImg from "../../img/project-sudoku.png";
import BookImg from "../../img/project-book.png";

const Project = ({ title, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }
    `;

    const imgStyle = css`
        flex-shrink: 0;
        max-width: 400px; /* IE11 limit width so it doesn't get too big out of a grid */
        height: 15vh;
        margin: 10px 0;
        margin-right: 5%;
        border: 2px solid ${colors.maastrichtBlue};
        padding: 8px;
    `;

    const textStyle = css`
        flex-grow: 1;
        font-size: 0.8em;
        padding-top: 5px;
    `;

    return (
        <Card>
            <div className={style}>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <div className={textStyle}>
                    <Subtitle>{title}</Subtitle>
                    {children}
                </div>
            </div>
        </Card>
    );
};

class Projects extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            max-width: 1024px;
            margin: 0 auto;
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 47% 47%;
            grid-column-gap: 6%;
            grid-row-gap: 60px;
            width: 100%;

            ${mq.small(css`
                grid-template-columns: 100%;
            `)};
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        Cool <Accent>projects</Accent> I work on.
                    </Title>
                    <div className={gridStyle}>
                        <Project title="A Book with Pam" imgSrc={BookImg}>
                            <p>
                                After reading over 500 books in the last five
                                years, I wanted to build <em>something</em> with
                                the Goodreads API.
                            </p>
                            <p>
                                A tech demo built using React with 3D transforms
                                and Python on Docker.
                            </p>
                        </Project>
                        <Project title="this.portfolio()" imgSrc={BlogImg}>
                            <p>This very website!</p>
                            <p>
                                It is made using ReactJS and I use the Emotion
                                CSS-in-JS library. I can quickly create base
                                components and iterate over many (many, many)
                                designs.
                            </p>
                        </Project>
                        <Project
                            title="React-Prevention 🚫"
                            imgSrc={PreventionImg}
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
                        <Project title="Sudoku in ReactJS" imgSrc={SudokuImg}>
                            <p>My first ReactJS application!</p>
                            <p>
                                I love playing sudoku and kakuro during my free
                                time, so I decided it would be a good starting
                                point to develop solvers for each along with a
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
