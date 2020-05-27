import React from "react";
import C_STEM from "./STEM/C_STEM";
import C_ELA from "./ELA/C_ELA";

const C_ACTSectionScores = (props) => {
    return (
        <section>
            <h1>ACT Section Scores</h1>
            <C_STEM P_STEM = {props.P_ACTSectionScores.STEM}/>
            <C_ELA P_ELA = {props.P_ACTSectionScores.ELA}/>

        </section>

    )
}

export default C_ACTSectionScores;