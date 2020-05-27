import React from "react";

const C_siblings = (props) => {
    return (
        <section>
            <h1>Siblings</h1>
            <section>
                {props.P_siblings.map(function(siblings) {
                    return <section>
                        <h1>Sibling</h1>
                        <p>First Name : {siblings.firstName}</p>
                        <p>Middle Initial : {siblings.middleInitial}</p>
                        <p>Last Name : {siblings.lastName}</p>
                        <p>Age : {siblings.age}</p>
                        <p>Relationship : {siblings.relationship}</p>
                        <p>Education Level : {siblings.educationLevel}</p>
                    </section>
                })}
            </section>
        </section>

    )
}

export default C_siblings;