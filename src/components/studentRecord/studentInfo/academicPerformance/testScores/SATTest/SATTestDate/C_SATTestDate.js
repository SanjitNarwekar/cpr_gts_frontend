import React from "react";

const C_SATTestDate = (props) => {
    return (
        <section>
            <h1>SAT Test Date</h1>
            <p>Test Year: {props.P_SATTestDate.testYear}</p>
            <p>Test Month: {props.P_SATTestDate.testMonth}</p>
            <p>Test Day: {props.P_SATTestDate.testDay}</p>
        </section>

    )
}

export default C_SATTestDate;