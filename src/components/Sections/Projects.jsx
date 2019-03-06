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
import DataCouncilImg from "../../img/project-datacouncil.png";
import JuniorDevImg from "../../img/project-juniordev.png";
import RailgunImg from "../../img/project-railgun.gif";
import SixtyNineImg from "../../img/project-69.png";

const Project = ({ title, association, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }
    `;

    const imgWrapperStyle = css`
        flex-shrink: 0;
        max-width: 400px; /* IE11 limit width so it doesn't get too big out of a grid */
        width: 25%;
        height: 100%;
        margin: 10px 20px 0 0;
        border-right: 1px solid ${colors.maastrichtBlue};
        padding: 0 20px 0 0;
    `;

    const imgStyle = css`
        display: block;
        max-width: 400px; /* IE11 limit width so it doesn't get too big out of a grid */
        width: 100%;
        height: 100%;
        border-radius: 3px;
    `;

    const textStyle = css`
        flex-grow: 1;
        font-size: 0.8em;
        padding-top: 5px;
    `;

    return (
        <Card>
            <div className={style}>
                <div className={imgWrapperStyle}>
                    {imgSrc && (
                        <img src={imgSrc} alt="logo" className={imgStyle} />
                    )}
                </div>
                <div className={textStyle}>
                    <Subtitle disableMargin={!!association}>{title}</Subtitle>
                    {association && <Accent>with {association}</Accent>}
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
                        My <Accent>projects</Accent> and public{" "}
                        <Accent>talks</Accent>.
                    </Title>
                    <div className={gridStyle}>
                        <Project
                            title="Talk at DataCouncil.ai"
                            imgSrc={DataCouncilImg}
                        >
                            <p>
                                I will be giving a talk at Data Council about
                                Data Engineering.
                            </p>
                        </Project>
                        <Project
                            title="Alogrithm SixtyNine"
                            imgSrc={SixtyNineImg}
                            association="Vase.ai"
                        >
                            <p>
                                I will be giving a talk at Data Council about
                                Data Engineering.
                            </p>
                        </Project>
                        <Project
                            title="Project Railgun"
                            imgSrc={RailgunImg}
                            association="Vase.ai"
                        >
                            <p>
                                Real-time event dispatcher for pipelines and
                                processing units.
                            </p>
                        </Project>
                        <Project title="A Book with Pam" imgSrc={BookImg}>
                            <p>
                                Every page contains the best of 500 books I read
                                in the last five years.
                            </p>
                            <p>
                                Tech demo built using 3D CSS, ReactJS and
                                Python.
                            </p>
                        </Project>
                        <Project title="this.portfolio()" imgSrc={BlogImg}>
                            <p>
                                Made using ReactJS, CSS-in-JS, CSS Keyframe
                                Animation, Grid and Flexbox.
                            </p>
                        </Project>
                        <Project
                            title="Talk at JuniorDev.io"
                            imgSrc={JuniorDevImg}
                        >
                            <p>
                                I will be giving a talk at Junior Dev about how
                                I started working as a Data Engineer.
                            </p>
                        </Project>
                        <Project
                            title="React-Prevention"
                            imgSrc={PreventionImg}
                        >
                            <p>
                                A little library that prevents default and stops
                                propagation in JavaScript in a nifty way.
                            </p>
                        </Project>
                        <Project title="Sudoku in ReactJS" imgSrc={SudokuImg}>
                            <p>My first ReactJS application!</p>
                            <p>
                                Implements my own algorithm to automate the
                                solution of medium difficulty Sudoku games.
                            </p>
                        </Project>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Projects;
