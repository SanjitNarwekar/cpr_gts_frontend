import React from "react";

const C_schoolEntryDate = (props) => {
    return (
        <section>
            <h1>School Entry Date</h1>
            <p> School Year of Entry : {props.P_schoolEntryDate.schoolYearOfEntry}</p>
            <p> School Month Of Entry: {props.P_schoolEntryDate.schoolMonthOfEntry}</p>
        </section>

    )
}

export default C_schoolEntryDate;