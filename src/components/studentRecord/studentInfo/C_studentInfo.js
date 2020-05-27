import React from "react";
import C_parentsInfo from "./parentsInfo/C_parentsInfo";
import C_siblings from "./siblings/C_siblings";
import C_academicPerformance from "./academicPerformance/C_academicPerformance";
import C_workExperience from "./workExperience/C_workExperience";
import C_extraCurricular     from "./extraCurricular/C_extraCurricular";
import C_careerGoal from "./careerGoal/C_careerGoal";
import C_studentInfoHeader from "./studentInfoHeader/C_studentInfoHeader";
import C_studentCitizenship from "./studentCitizenship/C_studentCitizenship";

const C_studentInfo = (props) => {
    return (
        <section>
            <h1>StudentInfo</h1>
            <C_studentInfoHeader P_studentInfoHeader = {props.P_studentInfo.studentInfoHeader}/>
            <C_studentCitizenship P_studentCitizenhip = {props.P_studentInfo.studentCitizenship}/>
            <C_parentsInfo P_parentsInfo = {props.P_studentInfo.parentsInfo}/>
            <C_siblings P_siblings = {props.P_studentInfo.siblings}/>
            <C_academicPerformance P_acadPerf = {props.P_studentInfo.academicPerformance} />
            <C_workExperience P_workExperience = {props.P_studentInfo.workExperience}/>
            <C_extraCurricular P_extraCurricular = {props.P_studentInfo.extraCurricular} />
            <C_careerGoal P_careerGoal = {props.P_studentInfo.careerGoal}/>
        </section>
    )
}

export default C_studentInfo;