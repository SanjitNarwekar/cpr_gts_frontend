import React from "react";

const C_studentBirthDate = (props) => {
    return (
        <section>
            <h1>Student Birth Date</h1>
            <p>Birth Year: {props.P_studentBirthDate.studentBirthYear}</p>
            <p>Birth Month: {props.P_studentBirthDate.studentBirthMonth}</p>
            <p>Birth Day: {props.P_studentBirthDate.studentBirthDay}</p>
        </section>

    )
}

export default C_studentBirthDate;