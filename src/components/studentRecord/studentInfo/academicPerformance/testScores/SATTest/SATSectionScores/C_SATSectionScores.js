import React from "react";

const C_SATSectionScores = (props) => {
    return (
        <section>
            <h1>SAT Section Scores</h1>
            <p>Score EBRW: {props.P_SATsectionScores.scoreEBRW}</p>
            <p>Score Math: {props.P_SATsectionScores.scoreMath}</p>
        </section>

    )
}

export default C_SATSectionScores;
