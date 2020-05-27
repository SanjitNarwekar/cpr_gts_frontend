import React from "react";

const C_careerGoal = (props) => {
    return (
        <section>
            <h1>CareerGoal</h1>
            <p>careerInterestStream: {props.P_careerGoal.careerInterestStream}</p>
            <p>specialization: {props.P_careerGoal.specialization}</p>
            <p>superSpecialization: {props.P_careerGoal.superSpecialization}</p>
            <p>budget: {props.P_careerGoal.budget}</p>
            <p>personalityTraits: {props.P_careerGoal.personalityTraits}</p>

        </section>
    )
}

export default C_careerGoal;