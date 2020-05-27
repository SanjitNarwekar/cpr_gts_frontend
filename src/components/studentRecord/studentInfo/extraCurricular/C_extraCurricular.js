import React from "react";


const C_extraCurricular = (props) => {
    return (
        <section>
            <h1>Extra Curricular List</h1>

            <section>
                {
                    props.P_extraCurricular.map(function (extraCurricular) {
                        return <section>
                            <p>area: {extraCurricular.area}</p>
                            <p>description: {extraCurricular.description}</p>
                            <p>relevantDocumentation: {extraCurricular.relevantDocumentation}</p>

                        </section>
                    })
                }
            </section>

        </section>

    )
};

export default C_extraCurricular;