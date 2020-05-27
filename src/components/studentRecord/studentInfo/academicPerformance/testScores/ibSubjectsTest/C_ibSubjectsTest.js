import React from "react";
import C_ibSubjectTestDate from "./ibSubjectTestDate/C_ibSubjectTestDate";

const C_ibSubjectsTest = (props) => {
    return (
        <section>
            <h1>IB Subject Scores</h1>

            <section>
                {
                    props.P_ibSubjectTest.map(function (ibSubjectsTest) {
                        return <section>
                            <h1>IM Subject Test Score</h1>
                            <C_ibSubjectTestDate P_ibSubjectTestDate = {ibSubjectsTest.ibSubjectTestDate}/>
                            <p>IB Subject : {ibSubjectsTest.ibSubject}</p>
                            <p>IB Subject Level: {ibSubjectsTest.ibLevel}</p>
                            <p>IB Overall Score:  {ibSubjectsTest.overallScore}</p>
                        </section>
                    })
                }
            </section>

        </section>

    )
}

export default C_ibSubjectsTest;