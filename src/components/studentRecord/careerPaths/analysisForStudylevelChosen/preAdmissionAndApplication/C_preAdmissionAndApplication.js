import React from "react";
import C_specificCollegeChoices from "./specificCollegeChoices/C_specificCollegeChoices";
import C_preparation from "./preparation/C_preparation";


const C_preAdmissionAndApplication = (props) => {
    return (
        <section>
             <h1> PreAdmissionAndApplication </h1>
            <p>PreAdmissionAndApplication.studyCountryChoice:Field: {props.P_preAdmissionAndApplication.studyCountryChoice}</p>
            <C_specificCollegeChoices P_specificCollegeChoices = {props.P_preAdmissionAndApplication.specificCollegeChoices}/>
            <C_preparation P_preparation = {props.P_preAdmissionAndApplication.preparation}/>



        </section> )}


export default C_preAdmissionAndApplication
