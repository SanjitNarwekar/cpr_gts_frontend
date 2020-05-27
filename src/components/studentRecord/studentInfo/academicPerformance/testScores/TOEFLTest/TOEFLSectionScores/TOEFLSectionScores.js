import React from "react";

const TOEFLSectionScores = (props) => {
    return (
        <section>
            <h1>TOEFL Section Scores</h1>

                            <h1>TOEFL Section Scores</h1>
                            <p>Score Reading: {props.P_TOEFLSectionScores.scoreReading}</p>
                            <p>Score Listening: {props.P_TOEFLSectionScores.scoreListening}</p>
                            <p>Score Speaking: {props.P_TOEFLSectionScores.scoreSpeaking}</p>
                            <p>Score Writing: {props.P_TOEFLSectionScores.scoreWriting}</p>
            </section>
    )
}

export default TOEFLSectionScores;