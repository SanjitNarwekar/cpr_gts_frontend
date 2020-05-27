import React from "react";

const C_specificCollegeChoices = (props) => {
    return (
        <section>
            <h1> SpecificCollegeChoices:Array </h1>
            <section>
                {
                    props.P_specificCollegeChoices.map(function (specificCollegeChoices) {
                        return                        <section>
                            <h1>SpecificCollegeChoices:Array Array List</h1>
                            <p>SpecificCollegeChoices.collegeName:Element: {specificCollegeChoices.collegeName}</p>
                        </section>})}
            </section>
        </section> )}

export default C_specificCollegeChoices
