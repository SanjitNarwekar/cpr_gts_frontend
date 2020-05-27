import React from "react";
import C_completionOfSchoolingOrPreReqDate
        from "./completionOfSchoolingOrPreReqDate/C_completionOfSchoolingOrPreReqDate";
import C_competitiveTests from "./competitiveTests/C_competitiveTests";
import C_otherTests from "./otherTests/C_otherTests";
import C_planYears from "./planYears/C_planYears";
import C_breaks from "./breaks/C_breaks";
import C_careerAdviser from "./careerAdviser/C_careerAdviser";



const C_summaryOfTimeLineOfStudyLevelChosen = (props) => {

    return (
        <section>
            <h1> SummaryOfTimeLineOfStudyLevelChosen </h1>
            <p>SummaryOfTimeLineOfStudyLevelChosen.addYearsForVocationalAddOns:Field: {props.P_summaryOfTimeLineOfStudyLevelChosen.addYearsForVocationalAddOns}</p>
            <p>SummaryOfTimeLineOfStudyLevelChosen.estimatedCompletion:Field: {props.P_summaryOfTimeLineOfStudyLevelChosen.estimatedCompletion}</p>
            <p>SummaryOfTimeLineOfStudyLevelChosen.remarksOrNotes:Field: {props.P_summaryOfTimeLineOfStudyLevelChosen.remarksOrNotes}</p>
            <C_completionOfSchoolingOrPreReqDate P_completionOfSchoolingOrPreReqDate = {props.P_summaryOfTimeLineOfStudyLevelChosen.completionOfSchoolingOrPreReqDate}/>
            <C_competitiveTests P_competitiveTests = {props.P_summaryOfTimeLineOfStudyLevelChosen.competitiveTests}/>
            <C_otherTests P_otherTests = {props.P_summaryOfTimeLineOfStudyLevelChosen.otherTests}/>
            <C_planYears PPlanYears = {props.P_summaryOfTimeLineOfStudyLevelChosen.planYears}/>
            <C_breaks P_breaks = {props.P_summaryOfTimeLineOfStudyLevelChosen.breaks}/>
            <C_careerAdviser P_careerAdviser = {props.P_summaryOfTimeLineOfStudyLevelChosen.careerAdviser}/>



        </section> )}

export default C_summaryOfTimeLineOfStudyLevelChosen
