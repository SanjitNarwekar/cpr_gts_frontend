import React from "react";
import C_cambridgeTestDate from "./cambridgeTestDate/C_cambridgeTestDate";

const C_cambridgeALevelSubjectsTest = (props) => {
    return (
        <section>
            <h1>Cambridge A Level Subjects Test</h1>

            <section>
                {props.P_cambridgeALevelSubjectsTest.map(function(cambridgeALevelSubjectsTest) {
                    return <section>
                        <h1>Cambridge A Level Score</h1>
                        <C_cambridgeTestDate PCambridgeTestDate = {cambridgeALevelSubjectsTest.cambridgeTestDate}/>
                        <p>Cambridge Subject: {cambridgeALevelSubjectsTest.cambridgeSubject}</p>
                        <p>Cambridge Overall Score: {cambridgeALevelSubjectsTest.overallScore}</p>

                    </section>
                })}
            </section>

        </section>

    )
}

export default C_cambridgeALevelSubjectsTest;