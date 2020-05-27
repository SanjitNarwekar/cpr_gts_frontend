import React from "react";
import C_subjectSATTestDate from "./subjectSATTestDate/C_subjectSATTestDate";

const C_subjectSATTest = (props) => {
    return (
        <section>
            <h1>Subject SAT Scores</h1>
            {
                props.P_subjectSATTest.map(function (subjectSATTest) {
                    return <section>
                        <h1> SAT score for Subject</h1>
                        <C_subjectSATTestDate P_subjectSATTestDate = {subjectSATTest.subjectSATTestDate}/>
                        <p>Subject SAT Subject : {subjectSATTest.subjectSATSubject}</p>
                        <p>Subject SAT Overall Score : {subjectSATTest.subjectSATOverallScore}</p>

                    </section>
                })
            }

        </section>

    )
}

export default C_subjectSATTest;
