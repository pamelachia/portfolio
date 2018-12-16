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
        margin-bottom: 25px;
    `;

    const subtitleStyle = css`
        margin-left: 30px;
        display: flex;
        align-items: center;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        max-width: 60px;
        max-height: 60px;
        width: auto;
        height: auto;
        display: block;
    `;

    return (
        <div className={style}>
            <div className={topStyle}>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <div className={subtitleStyle}>
                    <Subtitle disableMargin={true}>{title}</Subtitle>
                </div>
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

            li {
                margin-top: 7px;
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
                    <Subtitle>
                        I adopt modern Software Engineering processes and use
                        Mathematical proofs to fluently comunicate and
                        collaborate with my peers.
                    </Subtitle>
                    <div className={gridStyle}>
                        <Skill
                            imgSrc={PythonImg}
                            title="Python development"
                            mobileOrder={1}
                        >
                            <ul>
                                <li>
                                    Delivering solutions making data stored in
                                    SQL and NoSQL databases accessible, allowing
                                    for re-design of data structures, production
                                    of migration scripts and data cleansing.
                                </li>
                                <li>
                                    Exploratory analysis with Pandas Dataframes
                                    on Jupyter Notebook and Google Colaboratory.
                                </li>
                                <li>
                                    Building data visualisations with Seaborn
                                    and Matplotlib, for actionable insights,
                                    allowing smoother decision making and better
                                    explanations to audiences.
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
                                    when using models based on economometrics
                                    and machine learning.
                                </li>
                            </ul>
                        </Skill>
                        <Skill
                            imgSrc={JavaScriptImg}
                            title="JavaScript development"
                            mobileOrder={2}
                        >
                            <ul>
                                <li>
                                    Developing complex algorithms in NodeJS,
                                    optimised for performance and high
                                    availability, delivered as a microservice.
                                </li>
                                <li>
                                    Composing full fledged websites with
                                    ReactJS, including providing feedback in
                                    design stages and copy.
                                </li>
                                <li>
                                    Delivering unit tested code with Jest and
                                    end-to-end tests with Cypress, running on
                                    Continuous Integration based on Docker
                                    containers.
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
