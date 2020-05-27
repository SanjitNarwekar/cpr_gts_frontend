import React from "react";


const C_parentMobile = (props) => {
    return (
        <section>
            <h1>Parent Mobile</h1>
            <p>Mobile County Code: {props.P_parentMobile.mobileCountryCode}</p>
            <p>Mobile County Code: {props.P_parentMobile.mobileNumber}</p>


        </section>

    )
};

export default C_parentMobile;