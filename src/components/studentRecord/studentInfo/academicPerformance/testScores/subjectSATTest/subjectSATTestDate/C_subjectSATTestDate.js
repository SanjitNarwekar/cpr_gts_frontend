import React from "react";

const C_subjectSATTestDate = (props) => {
    return (
        <section>
            <h1>Subject SAT Date</h1>
            <p>Test Year: {props.P_subjectSATTestDate.testYear}</p>
            <p>Test Month: {props.P_subjectSATTestDate.testMonth}</p>
            <p>Test Day: {props.P_subjectSATTestDate.testDay}</p>
        </section>
    )
}

export default C_subjectSATTestDate;