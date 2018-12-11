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

const Skill = ({ title, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
        margin-bottom: 50px;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }
    `;

    const imgStyle = css`
        flex-shrink: 0;
        max-width: 7vh;
        max-height: 7vh;
        width: auto;
        height: auto;
        margin-right: 5%;
        display: block;
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
                            imgSrc={GameTheoryImg}
                            title=" Game Theory (economics)"
                            mobileOrder={1}
                        >
                            <p>
                                Experienced in applying a broad range of game
                                theoretic models to business problems and
                                real-world situations.
                            </p>
                            <p>
                                I read game theory publications and books as a
                                hobby, and took many game theory modules in
                                university. All this allows me to bring new
                                perspectives to the table.
                            </p>
                        </Skill>
                        <Skill
                            imgSrc={PythonImg}
                            title="Python development"
                            mobileOrder={3}
                        >
                            <p>
                                My go-to for data management, cleaning and
                                transformation. I'm most commonly seen writing
                                Python data-related algorithms backed by MongoDB
                                and SQL.
                            </p>
                            <p>
                                I use Jupyter Notebook for exploratory analysis
                                and testing a range of data visualisations I'd
                                like to include in my projects.
                            </p>
                        </Skill>
                        <Skill
                            imgSrc={MathsImg}
                            title="Mathematics and Statistics"
                            mobileOrder={2}
                        >
                            <p>
                                Comfortable with formal mathematics and
                                statistics concepts.
                            </p>
                            <p>
                                I developed proofs for problems, created
                                mathematically complete algorithms for certain
                                projects, and consistently test statistical
                                assumptions when using models based on{" "}
                                <Accent>economometrics</Accent> and{" "}
                                <Accent>machine learning</Accent>.
                            </p>
                            <p>
                                My interest developed initially from the
                                elegance in theory, then further strengthened
                                when I though about the impact it would have in
                                practice if properly utilised. I read papers,
                                practice, and always do my best to understand
                                and learn new and foreign concepts fast.
                            </p>
                        </Skill>
                        <Skill
                            imgSrc={JavaScriptImg}
                            title="JavaScript development"
                            mobileOrder={4}
                        >
                            <p>
                                My language of choice for when I develop a
                                project end-to-end. The stack I'm most
                                experienced with is MERN:{" "}
                                <Accent>Mongo, Express, React, and Node</Accent>
                                .
                            </p>
                            <p>
                                I started exploring Javascript after some Python
                                due to my wanting to implement and deploy my
                                ideas in a more collaborative environment.
                            </p>
                            <p>
                                For these projects I follow standard engineering
                                practices for collaborating on large projects,
                                including writing unit tests with Jest,
                                end-to-end tests with Cypress, and running them
                                on continuous integration against each Git
                                commit.
                            </p>
                        </Skill>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Skills;
