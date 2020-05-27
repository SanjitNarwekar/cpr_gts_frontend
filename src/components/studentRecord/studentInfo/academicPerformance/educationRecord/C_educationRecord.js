import React from "react";
import C_schoolEntryDate     from "./schoolEntryDate/C_schoolEntryDate";
import C_recommendationLetters from "./recommendationLetters/C_recommendationLetters";
import C_otherSchoolDocuments from "./otherSchoolDocuments/C_otherSchoolDocuments";

const C_educationRecord = (props) => {
    return (
        <section>
            <h1>Education Record</h1>
            <section>
                {props.P_educationRecord.map(function(educationRecord) {
                    return <section>
                        <h1>School</h1>
                        <p>School Name: {educationRecord.schoolName}</p>
                        <C_schoolEntryDate P_schoolEntryDate = {educationRecord.schoolEntryDate}/>
                        <p>schoolZipCode: {educationRecord.schoolZipCode}</p>
                        <p>boardingSchool: {educationRecord.boardingSchool}</p>
                        <p>currentSchool: {educationRecord.currentSchool}</p>
                        <p>schoolLevel: {educationRecord.schoolLevel}</p>
                        <p>gradeReportingUnitName: {educationRecord.gradeReportingUnitName}</p>
                        <p>gradeOrCGPA: {educationRecord.gradeOrCGPA}</p>
                        <p>transcriptDoc: {educationRecord.transcriptDoc}</p>
                        <C_recommendationLetters P_recomenddationLetters = {educationRecord.recommendationLetters}/>
                        <C_otherSchoolDocuments P_otherSchoolDocument = {educationRecord.otherSchoolDocuments}/>
                    </section>
                })}
            </section>


        </section>

    )
}

export default C_educationRecord;