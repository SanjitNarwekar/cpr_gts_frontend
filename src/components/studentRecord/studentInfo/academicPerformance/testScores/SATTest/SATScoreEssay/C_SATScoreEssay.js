

import React from "react";

const C_SATScoreEssay = (props) => {
    return (
        <section>
            <h1>SAT Essay Scores</h1>
            <p>Rater 1: {props.P_SATScoreEssay.rater1}</p>
            <p>Rater 2: {props.P_SATScoreEssay.rater2}</p>
            <p>Rater 3: {props.P_SATScoreEssay.rater3}</p>

        </section>

    )
}

export default C_SATScoreEssay;