import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq } from "../../styles";

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
                        <Card>
                            <Skill
                                imgSrc="img/gametheory.png"
                                title=" Game Theory (economics)"
                            >
                                <p>
                                    Experienced in applying a broad range of game theoretic models to business problems and real-world situations.
                                </p>
                                <p>
                                    I read game theory publications and books as a hobby, and took many game theory modules in university. All this allows me to bring new perspectives to the table.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill
                                imgSrc="img/python.png"
                                title="Python development"
                            >
                                <p>
                                    Good working knowledge of Python. Have written Python scripts (VS Code) for data cleaning, data transforming, and data-related algorithms for SQL and MongoDB databases.
                                </p>
                                <p>
                                    Use Jupyter Notebook for exploratory analysis and testing a range of data visualisations I want to use for projects.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill imgSrc="img/maths.png" title="Mathematics and Statistics">
                                <p>
                                    Comfortable with formal mathematics and statistics concepts.
                                </p>
                                <p>
                                    I developed proofs for problems, created mathematically complete algorithms for certain projects, and consistently test statistical assumptions when using models based on <Accent>economometrics</Accent> and <Accent>machine learning</Accent>.
                                </p>
                                <p>
                                    My interest developed initially from the elegance in theory, then further strengthened when I though about the impact it would have in practice if properly utilised. I read papers, practice, and always do my best to understand and learn new and foreign concepts fast.
                                </p>
                            </Skill>
                        </Card>
                        <Card>
                            <Skill
                                imgSrc="img/javascript.png"
                                title="JavaScript development"
                            >
                                <p>
                                    I do full stack Javascript. <Accent>Mongo, Express, React, and Node</Accent>.
                                </p>
                                <p>
                                    I started exploring Javascript after some Python due to my wanting to implement and deploy my ideas fast.
                                </p>
                                <p>
                                    Experienced with Git and standard development and engineering practices for collaborating on large products.
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
