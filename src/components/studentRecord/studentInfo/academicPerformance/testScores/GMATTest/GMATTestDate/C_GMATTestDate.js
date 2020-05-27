import React from "react";

const C_GMATTestDate = (props) => {
    return (
        <section>
            <h1>GRETestDate</h1>
            <p>Test Year : {props.P_GMATestDate.testYear}</p>
            <p>Test Month : {props.P_GMATestDate.testMonth}</p>
            <p>Test Day : {props.P_GMATestDate.testDay}</p>

        </section>

    )
}

export default C_GMATTestDate;