

import React from "react";

const C_GRESectionScores = (props) => {
    return (
        <section>
            <h1>GRESectionScores Score</h1>
            <p>Score Verbal Reasoning: {props.P_GRESectionScores.scoreVerbalReasoning}</p>
            <p>Score Quantitative Reasoning: {props.P_GRESectionScores.scoreQuantitativeReasoning}</p>
            <p>Score Analytical Writing: {props.P_GRESectionScores.scoreAnalyticalWriting}</p>

        </section>

    )
}

export default C_GRESectionScores;