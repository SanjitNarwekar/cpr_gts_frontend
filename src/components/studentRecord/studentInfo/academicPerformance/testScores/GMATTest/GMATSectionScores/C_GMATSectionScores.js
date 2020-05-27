

import React from "react";

const C_GMATSectionScores = (props) => {
    return (
        <section>
            <h1>GRESectionScores Score</h1>
            <p>Score Verbal Reasoning: {props.P_GMATSectionScores.scoreVerbal}</p>
            <p>Score Quantitative Reasoning: {props.P_GMATSectionScores.scoreQuantitative}</p>
            <p>Score Analytical Writing: {props.P_GMATSectionScores.scoreAnalyticalWriting}</p>
            <p>Score Analytical Writing: {props.P_GMATSectionScores.scoreAnalyticalWriting}</p>
            <p>Score Total: {props.P_GMATSectionScores.scoreTotal}</p>
            <p>Score AWA: {props.P_GMATSectionScores.scoreAWA}</p>
            <p>Score Integrated Reasoning: {props.P_GMATSectionScores.scoreIntegratedReasoning}</p>

        </section>

    )
}

export default C_GMATSectionScores;