import React from "react";
import C_educationRecord from "./educationRecord/C_educationRecord";
import C_honorsReceived from "./honorsReceived/C_honorsReceived";
import C_testScores from "./testScores/C_testScores";

const C_academicPerformance = (props) => {
    return (
        <section>
            <h1>Academic Performance</h1>
            <C_educationRecord P_educationRecord = {props.P_acadPerf.educationRecord}/>
            <C_honorsReceived P_honorsReceived = {props.P_acadPerf.honorsReceived}/>
            <C_testScores P_testScores = {props.P_acadPerf.testScores}/>
        </section>
    )
}

export default C_academicPerformance;