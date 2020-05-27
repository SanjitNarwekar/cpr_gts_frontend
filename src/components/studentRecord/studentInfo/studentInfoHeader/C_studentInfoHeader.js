import React from "react";

import C_studentBirthDate from "./studentBirthDate/C_studentBirthDate";
import C_studentAddress from "./studentAddress/C_studentAddress";
import C_studentMobile from "./studentMobile/C_studentMobile";
import C_studentName  from "./studentName/C_studentName";


const C_studentInfoHeader = (props) => {
    return (
        <main>
            <h1>Student Info Header</h1>
            <p>Student  CRM ID: {props.P_studentInfoHeader.studentCRMId}</p>
            <p>Student  Email ID: {props.P_studentInfoHeader.studentEmailId}</p>
            <p>Student Gender: {props.P_studentInfoHeader.studentGender}</p>
            <C_studentMobile P_studentMobile = {props.P_studentInfoHeader.studentMobile}/>
            <C_studentName P_studentName ={props.P_studentInfoHeader.studentName}/>
            <C_studentAddress P_studentAddress = {props.P_studentInfoHeader.studentAddress}/>
            <C_studentBirthDate P_studentBirthDate ={props.P_studentInfoHeader.studentBirthDate}/>
        </main>
    )
}

export default C_studentInfoHeader;
