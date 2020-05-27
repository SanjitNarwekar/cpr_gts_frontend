import React from "react";
import C_ACTTestDate from "./ACTTestDate/C_ACTTestDate";
import C_ACTSectionScores from "./ACTSectionScores/C_ACTSectionScores";

const C_ACTTest = (props) => {
    return (
        <section>
            <h1>ACT Scores</h1>
            <section>
                {
                    props.P_ACTTest.map(function (ACTTest) {
                        return <section>
                            <h1>ACT Test Score</h1>
                            <C_ACTTestDate P_ACTTestDate = {ACTTest.ACTTestDate}/>
                            <C_ACTSectionScores P_ACTSectionScores = {ACTTest.ACTSectionScores}/>
                            <p>ACT Score Composite: {ACTTest.ACTScoreComposite}</p>
                        </section>
                    })
                }
            </section>

        </section>

    )
}

export default C_ACTTest;