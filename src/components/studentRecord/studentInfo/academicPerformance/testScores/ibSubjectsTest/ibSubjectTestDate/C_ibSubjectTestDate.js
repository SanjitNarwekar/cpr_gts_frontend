import React from "react";

const C_ibSubjectTestDate = (props) => {

    return (
        <section>
            <h1>IB Subject Test Date</h1>
            <p>Test Year: {props.P_ibSubjectTestDate.testYear}</p>
            <p>Test Month: {props.P_ibSubjectTestDate.testMonth}</p>
            <p>Test Day: {props.P_ibSubjectTestDate.testDay}</p>
        </section>
    )

}

export default C_ibSubjectTestDate