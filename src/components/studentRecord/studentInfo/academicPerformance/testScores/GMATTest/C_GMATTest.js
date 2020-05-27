import React from "react";
import C_GMATTestDate from "./GMATTestDate/C_GMATTestDate";
import C_GMATSectionScores from "./GMATSectionScores/C_GMATSectionScores";

const C_GMATTest = (props) => {
    return (
        <section>
            <h1>GMATTest Scores</h1>

            <section>
                {
                    props.P_GMATTest.map(function (GMATTest) {
                        return <section>
                            <h1>GMAT Test Score</h1>
                            <C_GMATTestDate P_GMATestDate = {GMATTest.GMATTestDate}/>
                            <C_GMATSectionScores P_GMATSectionScores = {GMATTest.GMATSectionScores}/>
                        </section>
                    })
                }
            </section>

        </section>

    )
}

export default C_GMATTest;