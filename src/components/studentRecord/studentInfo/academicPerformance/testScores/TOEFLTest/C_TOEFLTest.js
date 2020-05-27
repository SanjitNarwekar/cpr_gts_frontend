import React from "react";
import C_TOEFLTestDate from "./TOEFLTestDate/C_TOEFLTestDate";
import TOEFLSectionScores from "./TOEFLSectionScores/TOEFLSectionScores";

const C_TOEFLTest = (props) => {
    return (
        <section>
            <h1>TOEFL Scores</h1>
            <section>
                {props.P_TOEFLTest.map(function(TOEFLTest) {
                    return <section>
                        <h1>TOEFL Score</h1>
                        <C_TOEFLTestDate P_TOEFLTestDate={TOEFLTest.TOEFLTestDate}/>
                        <TOEFLSectionScores P_TOEFLSectionScores = {TOEFLTest.TOEFLSectionScores}/>
                    </section>
                })}
            </section>


        </section>

    )
}

export default C_TOEFLTest;


