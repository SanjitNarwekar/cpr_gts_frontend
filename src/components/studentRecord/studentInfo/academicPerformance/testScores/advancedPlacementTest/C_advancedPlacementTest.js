import React from "react";
import C_advancedPlacementTestDate from "./advancedPlacementTestDate/C_advancedPlacementTestDate";



const C_advancedPlacementTest = (props) => {
    return (
        <section>
            <h1>Advanced Placement Test Scores</h1>
            <section>
                {
                    props.P_advancedPlacementTest.map(function (advancedPlacementTest) {
                        return <section>
                            <h1>AP Score</h1>
                            <C_advancedPlacementTestDate P_AdvancedPlacementTestDate = {advancedPlacementTest.advancedPlacementTestDate} />
                            <p>AP Subject: {advancedPlacementTest.apSubject}</p>
                            <p>AP Overall Score: {advancedPlacementTest.overallScore}</p>
                        </section>
                    })
                }
            </section>

        </section>

    )
}

export default C_advancedPlacementTest;