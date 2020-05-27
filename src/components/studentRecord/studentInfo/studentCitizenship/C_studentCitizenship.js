import React from "react";

const C_studentCitizenship = (props) => {
    return (
        <section>
            <h1>Student Citizenship</h1>
            <p>studentCountryOfResidence : {props.P_studentCitizenhip.studentCountryOfResidence}</p>
            <p>studentCountryOfBirth : {props.P_studentCitizenhip.studentCountryOfBirth}</p>
            <p>studentCityOfBirth : {props.P_studentCitizenhip.studentCityOfBirth}</p>
            <p>studentNationality : {props.P_studentCitizenhip.studentNationality}</p>
            <p>studentNoOfYrsInUS : {props.P_studentCitizenhip.studentNoOfYrsInUS}</p>
            <p>studentNoOfYrsOutOfUS : {props.P_studentCitizenhip.studentNoOfYrsOutOfUS}</p>
            <p>studentCitizenshipStatusUSA : {props.P_studentCitizenhip.studentCitizenshipStatusUSA}</p>
        </section>
    )
}

export default C_studentCitizenship