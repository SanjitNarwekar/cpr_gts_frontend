import React from "react";
import C_otherTestDatePlanned from "./otherTestDatePlanned/C_otherTestDatePlanned";


const C_otherTests = (props) => {
    return (
        <section>
            <h1> OtherTests:Array </h1>
            <section> {
                props.P_otherTests.map(function (otherTests) {
                    return <section>
                        <h1>OtherTests:Array Array List</h1>
                        <p>otherTestName = {otherTests.otherTestName}</p>
                        <C_otherTestDatePlanned P_otherTestDatePlanned = {otherTests.otherTestDatePlanned}/>

                    </section>})}
            </section>  </section> )}
export default C_otherTests
