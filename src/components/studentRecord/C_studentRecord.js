import React from "react";
import C_studentInfo from "./studentInfo/C_studentInfo";
import C_careerPaths from "./careerPaths/C_careerPaths";
import C_gtsRecord from "./gtsRecord/C_gtsRecord";

const C_studentRecord = (props) => {
    return (
        <main>
            <C_studentInfo P_studentInfo = {props.P_studentRecord.studentInfo}/>
            <C_careerPaths P_careerPaths = {props.P_studentRecord.careerPaths}/>
            <C_gtsRecord P_gtsRecord = {props.P_studentRecord.gtsRecord}/>
        </main>
    )
}

export default C_studentRecord;







