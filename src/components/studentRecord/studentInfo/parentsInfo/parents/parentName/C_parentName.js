import React from "react";


const C_parentName = (props) => {
    return (
        <section>
            <h1>Parent Name</h1>
            <p>Parent First Name: {props.P_parentName.parentFirstName}</p>
            <p>Parent Middle Initial: {props.P_parentName.parentMiddleInitial}</p>
            <p>Parent Last Name: {props.P_parentName.parentLastName}</p>
            <p>Parent Former Last Name: {props.P_parentName.parentFormerLastName}</p>

        </section>

    )
};

export default C_parentName;