import React from "react";
import C_preAdmissionAndApplication from "./preAdmissionAndApplication/C_preAdmissionAndApplication";
import C_costOfAttendance from "./costOfAttendance/C_costOfAttendance";
import C_summaryOfTimeLineOfStudyLevelChosen
    from "./summaryOfTimeLineOfStudyLevelChosen/C_summaryOfTimeLineOfStudyLevelChosen";
import C_summaryOfStudyLevelChosen from "./summaryOfStudyLevelChosen/C_summaryOfStudyLevelChosen";


const C_analysisForStudyLevelChosen = (props) => {
    return (
        <section><h1> AnalysisForStudyLevelChosen:Array </h1>
            <section> {
                props.P_analysisForStudyLevelChosen.map(function (analysisForStudyLevelChosen) {
                    return <section>
                        <h1>AnalysisForStudyLevelChosen:Array Array List</h1>
                        <p>AnalysisForStudyLevelChosen.studyLevelforConfig:Element: {analysisForStudyLevelChosen.studyLevelforConfig}</p>
                        <C_preAdmissionAndApplication P_preAdmissionAndApplication = {analysisForStudyLevelChosen.preAdmissionAndApplication}/>
                        <C_costOfAttendance P_costOfAttendance = {analysisForStudyLevelChosen.costOfAttendance}/>
                        <C_summaryOfTimeLineOfStudyLevelChosen  P_summaryOfTimeLineOfStudyLevelChosen = {analysisForStudyLevelChosen.summaryOfTimeLineOfStudyLevelChosen} />
                        <C_summaryOfStudyLevelChosen P_summaryOfStudyLevelChosen = {analysisForStudyLevelChosen.summaryOfStudyLevelChosen}/>
                    </section>
                })}
            </section>
        </section>
    )
}

export default C_analysisForStudyLevelChosen
