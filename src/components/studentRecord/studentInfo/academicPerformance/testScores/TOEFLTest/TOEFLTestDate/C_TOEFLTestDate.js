import React from "react";

const C_TOEFLTestDate = (props) => {
    return (
        <section>
            <h1>TOEFL Test Date</h1>
            <p>Test Year: {props.P_TOEFLTestDate.testYear}</p>
            <p>Test Month: {props.P_TOEFLTestDate.testMonth}</p>
            <p>Test Day: {props.P_TOEFLTestDate.testDay}</p>

        </section>

    )
}

export default C_TOEFLTestDate;