import React from "react";
import C_GRETestDate from "./GRETestDate/C_GRETestDate";
import C_GRESectionScores from "./GRESectionScores/C_GRESectionScores";
const C_GRETest = (props) => {
    return (
        <section>
            <h1>GRETest Scores</h1>

            <section>
                {
                    props.P_GRETest.map(function (GRETest) {
                        return <section>
                            <h1>GRE Test Score</h1>
                            <C_GRETestDate P_GRETestDate = {GRETest.GRETestDate}/>
                            <C_GRESectionScores P_GRESectionScores = {GRETest.GRESectionScores}/>
                        </section>
                    })
                }
            </section>

        </section>

    )
}

export default C_GRETest;