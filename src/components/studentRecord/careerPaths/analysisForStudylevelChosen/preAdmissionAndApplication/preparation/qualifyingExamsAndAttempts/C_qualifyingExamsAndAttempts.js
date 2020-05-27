import React from "react";

const C_qualifyingExamsAndAttempts = (props) => {

    return ( <section> <h1> QualifyingExamsAndAttempts:Array </h1>
            <section>{
                props.P_qualifyingExamsAndAttempts.map(function (qualifyingExamsAndAttempts) {
                    return <section>
                            <h1>QualifyingExamsAndAttempts:Array Array List</h1>
                            <p>QualifyingExamsAndAttempts.examName:Element: {qualifyingExamsAndAttempts.examName}</p>
                            <p>QualifyingExamsAndAttempts.numberOfAttempts:Element: {qualifyingExamsAndAttempts.numberOfAttempts}</p>
                            <p>QualifyingExamsAndAttempts.costOfExam:Element: {qualifyingExamsAndAttempts.costOfExam}</p>

                    </section>
                })}
            </section>
        </section> )}

export default C_qualifyingExamsAndAttempts
