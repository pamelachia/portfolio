import React, { Component } from "react";
import { css, keyframes } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import Link from "../Cards/Link";
import { colors, mq } from "../../styles";
import MathsImg from "../../img/maths.png";
import GameTheoryImg from "../../img/gametheory.png";
import PythonImg from "../../img/python.png";
import JavaScriptImg from "../../img/javascript.png";

const Skill = ({ title, imgSrc, mobileOrder, displayDetail, children }) => {
    const style = css`
        width: 100%;
        margin-bottom: 50px;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }

        border-bottom: 1px solid ${colors.maastrichtBlue};

        ${mq.small(css`
            order: ${mobileOrder};
        `)};
    `;

    const topStyle = css`
        display: flex;
        margin-bottom: 25px;

        ${mobileOrder < 3 ? "flex-direction: row-reverse" : ""};
        ${mq.small(css`
            flex-direction: row;
        `)};
    `;

    const subtitleStyle = css`
        display: flex;
        align-items: center;
        flex-grow: 1;
        text-align: center;
        justify-content: center;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        max-width: 60px;
        max-height: 60px;
        width: auto;
        height: auto;
        display: block;
        margin: 0 10px;
    `;

    const childrenStyle = css`
        font-size: 0.8em;
        overflow: hidden;
        max-height: 0px;
        transition: max-height 0.8s ease-in-out;

        ${displayDetail ? "max-height: 1000px; padding-bottom: 10px;" : ""};
    `;

    return (
        <div className={style}>
            <div className={topStyle}>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <div className={subtitleStyle}>
                    <Subtitle disableMargin={true}>{title}</Subtitle>
                </div>
            </div>
            <div className={childrenStyle}>{children}</div>
        </div>
    );
};

const disappear = keyframes`
    0% {
        opacity: 1;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 0;
        pointer-events: none
    }
`;

class Skills extends Component {
    state = {
        learnMore: false
    };

    handleLearnMoreClick = () => {
        this.setState({ learnMore: true });
    };

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
            grid-row-gap: 50px;
            width: 100%;
            margin-top: 80px;

            ${mq.small(css`
                grid-template-columns: 100%;
            `)};
        `;

        const learnMoreStyle = css`
            margin: 100px auto 0;
            text-align: center;
            opacity: 1;

            animation-fill-mode: forwards;
            animation-duration: 0.8s;
            ${this.state.learnMore ? `animation-name: ${disappear}` : ""};
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        My <Accent>skills</Accent>.
                    </Title>
                    <Subtitle>
                        I focus on effective and clear communication when
                        collaborating with my peers, utilising my best knowledge
                        of numbers, data, and people. I also adopt modern
                        Software Engineering processes while working on products
                        and personal projects.
                    </Subtitle>
                    <div className={gridStyle}>
                        <Skill
                            imgSrc={PythonImg}
                            title="Python development"
                            mobileOrder={1}
                            displayDetail={this.state.learnMore}
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
                            displayDetail={this.state.learnMore}
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
                            displayDetail={this.state.learnMore}
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
                                    Continuous Integration.
                                </li>
                                <li>
                                    Developing Serverless applications and
                                    running services on AWS and Google Cloud
                                    Platform (GCP).
                                </li>
                            </ul>
                        </Skill>
                        <Skill
                            imgSrc={GameTheoryImg}
                            title="Game Theory (economics)"
                            mobileOrder={4}
                            displayDetail={this.state.learnMore}
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
                    <div className={learnMoreStyle}>
                        <Link onClick={this.handleLearnMoreClick}>
                            Learn more
                        </Link>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Skills;
