import React from "react";

const C_GRETestDate = (props) => {
    return (
        <section>
            <h1>GRETestDate</h1>
            <p>Test Year : {props.P_GRETestDate.testYear}</p>
            <p>Test Month : {props.P_GRETestDate.testMonth}</p>
            <p>Test Day : {props.P_GRETestDate.testDay}</p>

        </section>

    )
}

export default C_GRETestDate;