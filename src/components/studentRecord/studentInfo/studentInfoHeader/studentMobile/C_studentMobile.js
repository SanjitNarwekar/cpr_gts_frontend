import React from "react";

const C_studentMobile = (props) => {
    return (
        <section>
            <h1>StudentMobile</h1>
            <p>Mobile Country Code: {props.P_studentMobile.studentMobileCountryCode}</p>
            <p>Mobile Number: {props.P_studentMobile.studentMobileNumber}</p>
        </section>

    )
}

export default C_studentMobile;