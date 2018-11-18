import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import Link from "../Cards/Link";
import { colors } from "../../styles";
import { mq } from "../../styles";

const Project = ({ title, imgSrc, children }) => {
    const style = css`
        width: 100%;
        margin-bottom: 80px;
        /* IE11 hack, remove the margin if we can use grid gutter */
        @supports (display: grid) {
            margin-bottom: 0;
        }
    `;

    const imgStyle = css`
        flex-shrink: 0;
        width: 95%; /* 1% less to accomodate border */
        max-width: 400px; /* IE11 limit width so it doesn't get too big out of a grid */
        height: 100%;
        margin: 10px 0;
        margin-right: 5%;
        border: 2px solid ${colors.maastrichtBlue};
        border-radius: 10px;
        padding: 2%;
    `;

    return (
        <Card>
            <div className={style}>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <Subtitle>{title}</Subtitle>
                {children}
            </div>
        </Card>
    );
};

const Post = ({ type, href, children }) => {
    const style = css`
        background: ${colors.lightDark};
        display: flex;
        border-bottom: 1px solid ${colors.deepDark};
    `;

    const typeStyle = css`
        width: 200px;
        padding: 10px;
        border-right: 1px solid ${colors.deepDark};
    `;

    const titleStyle = css`
        padding: 10px 20px;
    `;

    return (
        <Card>
            <div className={style}>
                <div className={typeStyle}>{type}</div>
                <div className={titleStyle}>
                    <Link href={href}>{children}</Link>
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

        const postsStyle = css`
            margin-bottom: 50px;
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 28% 28% 28%;
            grid-column-gap: 7.99%;
            grid-row-gap: 50px;
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
                    <div className={postsStyle}>
                        <Subtitle>Blogposts and Essays</Subtitle>
                        <Post type="React">
                            10 reasons why writing a blogpost is cool.
                        </Post>
                        <Post type="Hobbies">My hobbies are amazing.</Post>
                        <Post type="Python">
                            About the time when I defeated a python.
                        </Post>
                        <Post type="Dissertation">
                            The dissertation from my degree.
                        </Post>
                    </div>
                    <Subtitle>Development</Subtitle>
                    <div className={gridStyle}>
                        <Project
                            title="This portfolio"
                            imgSrc="img/project-blog.png"
                        >
                            <p>This is my first-ever personal website!</p>
                            <p>
                                It is made using ReactJS and I use the Emotion
                                CSS-in-JS library. I can quickly create base
                                components and iterate over many (many, many)
                                designs.
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
                            title="Sudoku in ReactJS"
                            imgSrc="img/project-sudoku.png"
                        >
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
