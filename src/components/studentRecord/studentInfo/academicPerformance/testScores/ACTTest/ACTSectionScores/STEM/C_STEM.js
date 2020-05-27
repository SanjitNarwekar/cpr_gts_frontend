import React from "react";

const C_STEM = (props) => {
    return (
        <section>
            <h1>ACT STEM Scores</h1>
            <p>"scoreSTEM": {props.P_STEM.scoreSTEM}</p>
            <p>"scoreMath": {props.P_STEM.scoreMath}</p>
            <p>"scoreScience": {props.P_STEM.scoreScience}</p>

        </section>

    )
}

export default C_STEM;