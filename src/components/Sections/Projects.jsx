import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Link from "../Cards/Link";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq, colors } from "../../styles";
import BlogImg from "../../img/project-blog.png";
import PreventionImg from "../../img/project-prevention.png";
import BookImg from "../../img/project-book.png";
import DataCouncilImg from "../../img/project-datacouncil.png";
import TeachingImg from "../../img/project-teaching.png";
import RailgunImg from "../../img/project-railgun.gif";
import SamplingImg from "../../img/project-sampling.png";
import RestaurantsImg from "../../img/project-restaurants.png";
import GitlabIcon from "../../svg-components/GitlabIcon";
import GithubIcon from "../../svg-components/GithubIcon";

const ProjectSubtitle = ({ type, typePayload }) => {
    switch (type) {
        case "company":
            return <Accent>with {typePayload}</Accent>;
        case "where":
            return <Accent>in {typePayload}</Accent>;
        case "github":
            return (
                <Accent>
                    on{" "}
                    <Link href={typePayload}>
                        GitHub{" "}
                        <GithubIcon
                            width="11px"
                            height="11px"
                            fill="currentColor"
                        />
                    </Link>
                </Accent>
            );
        case "gitlab":
            return (
                <Accent>
                    on{" "}
                    <Link href={typePayload}>
                        GitLab{" "}
                        <GitlabIcon
                            width="11px"
                            height="11px"
                            fill="currentColor"
                        />
                    </Link>
                </Accent>
            );
        default:
            return null;
    }
};

const Project = ({ title, type, typePayload, imgSrc, children }) => {
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
                    <Subtitle disableMargin={!!typePayload}>{title}</Subtitle>
                    <ProjectSubtitle type={type} typePayload={typePayload} />
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
            margin-top: 60px;

            ${mq.small(css`
                grid-template-columns: 100%;
            `)};
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        My <Accent>projects</Accent> (last updated 2018)
                    </Title>
                    <div className={gridStyle}>
                        <Project
                            title="Meetups and Events"
                            imgSrc={DataCouncilImg}
                            type="company"
                            typePayload="Women Who Code, DataCouncil.ai, JuniorDev.io and more"
                        >
                            <p>
                                I enjoy sharing in meetups and events about all
                                things data.
                            </p>
                        </Project>
                        <Project
                            title="Teaching how to Code"
                            imgSrc={TeachingImg}
                            type="where"
                            typePayload="hipster cafes :)"
                        >
                            <p>
                                I teach my friends how to code so they can
                                improve their productivity in and out of work.
                                Mainly Python, Javascript, Google Apps Script,
                                and VBA.
                            </p>
                        </Project>
                        <Project
                            title="Sampling Algorithm"
                            imgSrc={SamplingImg}
                            type="company"
                            typePayload="Vase.ai"
                        >
                            <p>
                                Implemented an algorithm for balanced population
                                sampling in the company that significantly
                                improved sampling data.
                            </p>
                        </Project>
                        <Project
                            title="Project Railgun"
                            imgSrc={RailgunImg}
                            type="company"
                            typePayload="Vase.ai"
                        >
                            <p>
                                Real-time event dispatcher for pipelines and
                                processing units.
                            </p>
                        </Project>
                        <Project
                            title="Slack /restaurant"
                            imgSrc={RestaurantsImg}
                            type="gitlab"
                            typePayload="https://gitlab.com/pamelachia/slack-restaurants"
                        >
                            <p>
                                A Slack command that uses the HERE GeoAPI to
                                find the restaurants around your area.
                            </p>
                        </Project>
                        <Project
                            title="A Book with Pam"
                            imgSrc={BookImg}
                            type="gitlab"
                            typePayload="https://gitlab.com/pamelachia/book"
                        >
                            <p>
                                Every page contains the best of 500 books I read
                                in the last five years.
                            </p>
                            <p>
                                Tech demo built using 3D CSS, ReactJS and
                                Python.
                            </p>
                        </Project>
                        <Project
                            title="this.portfolio()"
                            imgSrc={BlogImg}
                            type="github"
                            typePayload="https://github.com/pamelachia/portfolio"
                        >
                            <p>
                                Made using ReactJS, CSS-in-JS, CSS Keyframe
                                Animation, Grid and Flexbox.
                            </p>
                        </Project>
                        <Project
                            title="React-Prevention"
                            imgSrc={PreventionImg}
                            type="github"
                            typePayload="https://github.com/pamelachia/react-prevention"
                        >
                            <p>
                                A little library that prevents default and stops
                                propagation in JavaScript in a nifty way.
                            </p>
                        </Project>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Projects;
