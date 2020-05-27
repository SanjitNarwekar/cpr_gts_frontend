import React from "react";
import C_semester from "./semester/C_semester";

const C_costOfAttendance = (props) => {
    return ( <section>
        <h1> CostOfAttendance </h1>
        <C_semester P_semester = {props.P_costOfAttendance.semester}/>
        <p>CostOfAttendance.collegeTypePreferred:Field: {props.P_costOfAttendance.collegeTypePreferred}</p>
        <p>CostOfAttendance.collegeRakningPreferred:Field: {props.P_costOfAttendance.collegeRankingPreferred}</p>
        <p>CostOfAttendance.programIsSTEM:Field: {props.P_costOfAttendance.programIsSTEM}</p>
        <p>CostOfAttendance.scholarshipPercentage:Field: {props.P_costOfAttendance.scholarshipPercentage}</p>
        <p>CostOfAttendance.tuitionWaiverPercentage:Field: {props.P_costOfAttendance.tuitionWaiverPercentage}</p>
        <p>CostOfAttendance.stipendAmount:Field: {props.P_costOfAttendance.stipendAmount}</p>
        <p>CostOfAttendance.assistantship:Field: {props.P_costOfAttendance.assistantship}</p>



    </section> )}


export default C_costOfAttendance
