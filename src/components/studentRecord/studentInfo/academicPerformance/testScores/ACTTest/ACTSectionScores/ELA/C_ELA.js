import React from "react";

const C_ELA = (props) => {
    return (
        <section>
            <h1>ACT ELA  Scores</h1>
            <p>Score English {props.P_ELA.scoreEnglish}</p>
            <p>Score Reading {props.P_ELA.scoreReading}</p>
            <p>Score Writing {props.P_ELA.scoreWriting}</p>

        </section>

    )
}

export default C_ELA;