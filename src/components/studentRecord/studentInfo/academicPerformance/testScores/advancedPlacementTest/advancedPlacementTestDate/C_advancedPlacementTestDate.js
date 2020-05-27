import React from "react";


const C_advancedPlacementTestDate = (props) => {
    return (
        <section>
            <h1>AP Test Dates</h1>
            <p>AP Year: {props.P_AdvancedPlacementTestDate.testYear}</p>
            <p>AP Month: {props.P_AdvancedPlacementTestDate.testMonth}</p>
            <p>AP Day: {props.P_AdvancedPlacementTestDate.testDay}</p>

        </section>

    )
}

export default C_advancedPlacementTestDate;