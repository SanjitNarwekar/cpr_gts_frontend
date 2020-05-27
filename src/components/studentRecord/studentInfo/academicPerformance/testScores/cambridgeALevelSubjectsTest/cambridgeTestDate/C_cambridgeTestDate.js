import React from "react";

const C_cambridgeTestDate = (props) => {
    return (
        <section>
            <h1>Cambridge Test Date</h1>
            <p>Test Year:  {props.PCambridgeTestDate.testYear}</p>
            <p>Test Month: {props.PCambridgeTestDate.testMonth}</p>
            <p>Test Day: {props.PCambridgeTestDate.testDay}</p>

        </section>

    )
}

export default C_cambridgeTestDate;