import React from "react";

const C_studentName = (props) => {
    return (
        <section>
            <h1>StudentName</h1>
            <p>FirstName: {props.P_studentName.studentFirstName}</p>
            <p>Middle Initial:  {props.P_studentName.studentMiddleInitial}</p>
            <p>Last Name:  {props.P_studentName.studentLastName}</p>

        </section>

    )
}

export default C_studentName;