import React from "react";
import C_testDatePlanned from "./testDatePlanned/C_testDatePlanned";

const C_competitiveTests = (props) => {
    return (
        <section>
        <h1> CompetitiveTests:Array </h1>
        <section>
            {
                props.P_competitiveTests.map(function (competitiveTests) {
                    return                     <section>
                        <h1>CompetitiveTests:Array Array List</h1>
                        <C_testDatePlanned P_testDatePlanned = {competitiveTests.testDatePlanned} />
                        <p>TestDatePlanned.testName:Field: {competitiveTests.testName}</p>


                    </section>})}
        </section>
        </section> )}

export default C_competitiveTests
