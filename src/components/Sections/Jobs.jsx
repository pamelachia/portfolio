import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";

const Job = ({ title, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        width: 15%;
        height: 15%;
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

class Jobs extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            max-width: 1024px;
            margin: 0 auto;
        `;

        const gridStyle = css`
            display: grid;
            grid-template-columns: 100%;
            grid-column-gap: 10%;
            grid-row-gap: 50px;
            width: 100%;
            margin-top: 50px;
        `;

        return (
            <div className={style}>
                <Appear>
                    <Title>
                        I <Accent>work</Accent> with amazing companies.
                    </Title>
                    <div className={gridStyle}>
                        <Card>
                            <Job
                                imgSrc="img/vase.png"
                                title="Vase.ai"
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure.
                                </p>
                                <p>
                                    Dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </Job>
                        </Card>
                        <Card>
                            <Job
                                imgSrc="img/ace.png"
                                title="Acter Carton Enterprise (Family-run Business)"
                            >
                                <p>
                                    Dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure.
                                </p>
                            </Job>
                        </Card>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Jobs;
