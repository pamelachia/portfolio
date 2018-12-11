import React, { Component } from "react";
import { css } from "emotion";
import Title from "../Cards/Title";
import Subtitle from "../Cards/Subtitle";
import Appear from "../Appear";
import Accent from "../Cards/Accent";
import { mq } from "../../styles";
import Copier from "../Copier";

const Contact = ({ title, imgSrc, children }) => {
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

class Contacts extends Component {
    render() {
        const style = css`
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;

            ${mq.small(css`
                padding-bottom: 100px;
            `)};
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
                        Say <Accent>Hi</Accent>
                    </Title>
                    <Subtitle>
                        If you believe that we will both benefit from a chat,
                        let's <Accent>talk</Accent>. I love making new friends!
                    </Subtitle>
                    <div className={gridStyle}>
                        <Contact title="By Email">
                            Click{" "}
                            <Copier side="left">
                                <span>
                                    <Accent>
                                        this{" "}
                                        <span role="img" aria-label="Stars">
                                            ✨
                                        </span>
                                    </Accent>
                                </span>
                            </Copier>{" "}
                            to copy my email address.
                            <p>
                                This is the best way to contact me. I reply
                                within a day.
                            </p>
                        </Contact>
                        <Contact title="By Phone">
                            <p>
                                UK number: +{69 - 25} ({5 - 5}) {3189 + 4293}{" "}
                                {1283 - 405} {2349 - 1930}
                            </p>
                            <p>
                                If you really must hear my voice, this number
                                will lead you to my mobile.
                            </p>
                        </Contact>
                    </div>
                </Appear>
            </div>
        );
    }
}

export default Contacts;
