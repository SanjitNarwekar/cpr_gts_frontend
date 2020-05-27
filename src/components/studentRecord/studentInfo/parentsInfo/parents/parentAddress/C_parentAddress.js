import React from "react";

const C_parentAddress = (props) => {
    return (
        <section>
            <h1>Parent Address</h1>
            <p>Address Line 1 : {props.P_parentAddress.addressLine1}</p>
            <p>Address Line 2 : {props.P_parentAddress.addressLine2}</p>
            <p>Address Line 3 : {props.P_parentAddress.addressLine3}</p>
            <p>Address City : {props.P_parentAddress.addressCity}</p>
            <p>Address State or Province : {props.P_parentAddress.addressStateOrProvince}</p>
            <p>Address Country : {props.P_parentAddress.addressCountry}</p>

        </section>

    )
}

export default C_parentAddress;