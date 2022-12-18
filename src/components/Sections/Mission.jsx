import React, { Component } from "react";
import { css } from "emotion";
import Subtitle from "../Cards/Subtitle";
import { mq } from "../../styles";
import Accent from "../Cards/Accent";
import Appear from "../Appear";

class Mission extends Component {
    render() {
        const style = css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 1024px;
            margin: 0 auto;
            min-height: 100vh;

            ${mq.small(css`
                flex-direction: column;
            `)};
        `;

        return (
            <Appear>
                <div className={style}>
                    <Subtitle>
                        <p>
                            I am obsessed about <Accent>excellence</Accent>.
                            Focusing on two core methods to achieve that:
                        </p>
                    </Subtitle>
                    <p>
                        <ol>
                            <li>
                                <Accent>
                                    Quantified self and personal growth hacking.
                                </Accent>
                                <ul>
                                    <li>
                                        Yearly SMART-esque goals that I split
                                        into quarterly key results and weekly
                                        actions.
                                    </li>
                                    <li>
                                        Analyse to improve the amount and
                                        quality of productive time I have
                                        weekly, monthly, quarterly, and yearly.
                                    </li>
                                    <li>
                                        Collecting and reviewing my own sleeping
                                        and fitness data, food and liquid
                                        intake, HR and regular body checkups,
                                        social events etc.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Accent>
                                    Splitting my learning process into
                                    consumption, absorption, and application.
                                    Then maximising them separately by
                                    increasing speed and frequency.
                                </Accent>
                                <ul>
                                    <li>
                                        Consumption: To increase the funnel of
                                        knowledge and retain them, I collect
                                        daily key learnings, logical jumps and
                                        fun thought processes, and summaries and
                                        explanations of content I
                                        read/listen/watch.
                                    </li>
                                    <li>
                                        Absorption: To retain my learnings, I
                                        summarise the new learnings end of every
                                        month, review the monthly learnings end
                                        of every year, and revisit yearly
                                        summarised learnings end of every year.
                                    </li>
                                    <li>
                                        Application: Relying on only our brain
                                        is inefficient and dumb. I have an
                                        external digital database of content I
                                        consumed to function as a ‘second
                                        brain’. This is used to recall things
                                        I've learned so I can focus more on
                                        applying what I learn and not just
                                        memorising them.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                </div>
            </Appear>
        );
    }
}

export default Mission;
