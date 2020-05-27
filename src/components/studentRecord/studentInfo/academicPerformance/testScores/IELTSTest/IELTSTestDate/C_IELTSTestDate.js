import React from "react";

const C_IELTSTestDate = (props) => {
    return (
        <section>
            <h1>IELTS Test Date</h1>
            <p>Test Year: {props.P_IELTSTestDate.testYear}</p>
            <p>Test Month: {props.P_IELTSTestDate.month}</p>
            <p>Test Day: {props.P_IELTSTestDate.testDay}</p>

        </section>

    )
}

export default C_IELTSTestDate;