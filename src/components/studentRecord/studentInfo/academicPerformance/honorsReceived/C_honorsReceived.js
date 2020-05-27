import React from "react";

const C_honorsReceived = (props) => {
    return (
        <section>
            <h1>Honors Received</h1>
            <section>
                {props.P_honorsReceived.map(function(honorsReceived) {
                    return <section>
                        <h1>Honor</h1>
                        <p>Honor Title: {honorsReceived.honorTitle} </p>
                        <p>Grade Level: {honorsReceived.gradeLevel} </p>
                        <p>Level Of Recognition: {honorsReceived.levelOfRecognition} </p>
                    </section>
                })}
            </section>
        </section>
    )
}

export default C_honorsReceived;