import React from "react";

const C_studentAddress = (props) => {
    return (
        <section>
            <h1>StudentAddress</h1>
            <p>Address Line 1 : {props.P_studentAddress.studentAddressLine1}</p>
            <p>Address Line 2 : {props.P_studentAddress.studentAddressLine2}</p>
            <p>Address Line 3 : {props.P_studentAddress.studentAddressLine3}</p>
            <p>Address City : {props.P_studentAddress.studentAddressCity}</p>
            <p>Post Code : {props.P_studentAddress.studentAddressPostCode} </p>
            <p>Address State or Province : {props.P_studentAddress.studentAddressStateOrProvince}</p>
            <p>Address Country : {props.P_studentAddress.studentAddressCountry}</p>

        </section>

    )
}

export default C_studentAddress;