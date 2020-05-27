import React from "react";

const C_IELTSSectionScores
    = (props) => {
    return (
        <section>
            <h1>IELTS Section Scores</h1>
            <p>Score Reading: {props.P_IELTSSectionScores.scoreReading}</p>
            <p>Score Listening: {props.P_IELTSSectionScores.scoreListening}</p>
            <p>Score Speaking: {props.P_IELTSSectionScores.scoreSpeaking}</p>
            <p>Score Writing: {props.P_IELTSSectionScores.scoreWriting}</p>

        </section>

    )
}

export default C_IELTSSectionScores;