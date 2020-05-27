import React from "react";
import C_qualifyingExamsAndAttempts from "./qualifyingExamsAndAttempts/C_qualifyingExamsAndAttempts";
import C_universityApplications from "./universityApplications/C_universityApplications";


const C_preparation = (props) => {
    return (
        <section>
            <h1> Preparation </h1>
            <C_qualifyingExamsAndAttempts P_qualifyingExamsAndAttempts = {props.P_preparation.qualifyingExamsAndAttempts} />
            <C_universityApplications P_universityApplications = {props.P_preparation.universityApplications}/>

            <p>Preparation.otherExamsNumber:Element: {props.P_preparation.otherExamsNumber}</p>
            <p>Preparation.costFACT:Element: {props.P_preparation.costFACT}</p>
            <p>Preparation.costVisaAndOther:Element: {props.P_preparation.costVisaAndOther}</p>
            <p>Preparation.costPreAdmissionTotal:Field: {props.P_preparation.costPreAdmissionTotal}</p>
            <p>Preparation.costOfPreparation:Field: {props.P_preparation.costOfPreparation}</p>
        </section>

    )
}

export default C_preparation
