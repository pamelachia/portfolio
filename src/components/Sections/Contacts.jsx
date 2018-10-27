import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Card from "../Cards/Card";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq } from "../../styles";
import Copier from "../Copier";

const Contact = ({ title, imgSrc, children }) => {
    const style = css`
        display: flex;
        width: 100%;
    `;

    const imgStyle = css`
        flex-shrink: 0;
        width: 20%;
        height: 20%;
        margin-right: 5%;
    `;

    return (
        <div className={style}>
            <Card>
                {imgSrc && <img src={imgSrc} alt="logo" className={imgStyle} />}
                <div>
                    <Subtitle>{title}</Subtitle>
                    {children}
                </div>
            </Card>
        </div>
    );
};

class Contacts extends Component {
    render() {
        const style = css`
            padding: 150px 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
                        Do you want to <Accent>contact</Accent> me?
                    </Title>
                    <Subtitle>
                        Perhaps... you want to challenge me? Then, it can not be
                        helped!
                    </Subtitle>
                    <div className={gridStyle}>
                        <Contact title="By Email">
                            You can copy my email address by clicking{" "}
                            <Copier>
                                <span>
                                    <Accent>
                                        this.{" "}
                                        <span role="img" aria-label="Stars">
                                            ✨
                                        </span>
                                    </Accent>
                                </span>
                            </Copier>
                            <p>
                                You can paste it into your favorite email
                                client.
                            </p>
                        </Contact>
                        <Contact title="By Phone">
                            <p>
                                UK number: +{69 - 25} ({5 - 5}){3189 + 4293}{" "}
                                {1283 - 405} {2349 - 1930}
                            </p>
                            <p>
                                This number will lead you to my personal mobile.
                            </p>
                        </Contact>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Contacts;
