import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq } from "../../styles";
import MathsImg from "../../img/maths.png";
import GameTheoryImg from "../../img/gametheory.png";
import PythonImg from "../../img/python.png";
import JavaScriptImg from "../../img/javascript.png";

const Skill = ({ title, imgSrc, mobileOrder, children }) => {
    const style = css`
        width: 100%;
        margin-bottom: 50px;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }

        ${mq.small(css`
            order: ${mobileOrder};
        `)};
    `;

    const topStyle = css`
        display: flex;
    `;

    const subtitleStyle = css`
        flex-grow: 1;
        display: flex;
        align-items: center;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        max-width: 6vh;
        max-height: 6vh;
        width: auto;
        height: auto;
        display: block;
    `;

    return (
        <div className={style}>
            <div className={topStyle}>
                <div className={subtitleStyle}>
                    <Subtitle disableMargin={true}>{title}</Subtitle>
                </div>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
            </div>
            {children}
        </div>
    );
};

class Skills extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            max-width: 1024px;
            margin: 0 auto;

            ul {
                list-style-type: circle;
            }
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 45% 45%;
            grid-column-gap: 10%;
            grid-row-gap: 30px;
            width: 100%;
            margin-top: 50px;

            ${mq.small(css`
                grid-template-columns: 100%;
            `)};
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        My <Accent>skills</Accent>.
                    </Title>
                    <div className={gridStyle}>
                        <Skill
                            imgSrc={PythonImg}
                            title="Python development"
                            mobileOrder={1}
                        >
                            <p>[Python 3.7]</p>
                            <p>
                                Commonly Used Libraries: Numpy, Statistics,
                                Pandas, Matplotlib, Seaborn
                            </p>
                            <p>
                                Tools: Anaconda, Jupyter Notebook, Google
                                Colaboratory, VS Code
                            </p>
                            <ul>
                                <li>
                                    Writing scripts for data management,
                                    cleaning, and transformation.
                                </li>
                                <li>
                                    Exploratory analysis (pandas dataframes) on
                                    Jupyter Notebook and Google Colaboratory.
                                </li>
                                <li>
                                    Build data visualisations (seaborn and
                                    matplotlib) for actionable insights.
                                    Allowing smoother decision making at work
                                    and better explanations to audiences for
                                    personal projects.
                                </li>
                            </ul>
                        </Skill>
                        <Skill
                            imgSrc={MathsImg}
                            title="Mathematics and Statistics"
                            mobileOrder={3}
                        >
                            <ul>
                                <li>
                                    Comfortable with formal mathematics and
                                    statistics concepts.
                                </li>
                                <li>
                                    Quickly develop rigorous proofs for simpler
                                    solutions. This is so that simpler solutions
                                    are implemented with confidence and product
                                    improvements can be faster deployed.
                                </li>
                                <li>
                                    Create mathematically complete algorithms
                                    for more optimal performance for projects
                                    and products.
                                </li>
                                <li>
                                    Consistently test statistical assumptions
                                    when using models based on{" "}
                                    <Accent>economometrics</Accent> and{" "}
                                    <Accent>machine learning</Accent>.
                                </li>
                            </ul>
                        </Skill>
                        <Skill
                            imgSrc={JavaScriptImg}
                            title="JavaScript development"
                            mobileOrder={2}
                        >
                            <p>[Mongo, Express, React, Node]</p>
                            <ul>
                                <li>
                                    Mainly for deploying projects and products
                                    in a collaborative environment.
                                </li>
                                <li>
                                    Follow standard software engineering
                                    practices for collaborating on large
                                    projects. (Git, ...?)
                                </li>
                                <li>
                                    Write unit tests (Jest) and end-to-end tests
                                    (Cypress).
                                </li>
                                <li>
                                    Using Drone.io, CircleCI, and Docker for
                                    CI/CD. Host products as Docker containers
                                    running on VMs hosted in Azure running
                                    traefik.
                                </li>
                            </ul>
                        </Skill>
                        <Skill
                            imgSrc={GameTheoryImg}
                            title=" Game Theory (economics)"
                            mobileOrder={4}
                        >
                            <ul>
                                <li>
                                    Created game theory models to study real
                                    economies for two of my dissertations in
                                    university.
                                </li>
                                <li>
                                    Capable of applying game theoretic knowledge
                                    and concepts to solve real-world business
                                    problems.
                                </li>
                                <li>
                                    Completed several advanced game theory,
                                    mathematical economics, and microeconomics
                                    modules in university that focused on
                                    practical applications of game theory
                                    models.
                                </li>
                            </ul>
                        </Skill>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Skills;
