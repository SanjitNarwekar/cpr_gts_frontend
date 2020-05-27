import React from "react";
import C_parentName from "./parentName/C_parentName";
import C_parentMobile from "./parentMobile/C_parentMobile";
import C_parentAddress from "./parentAddress/C_parentAddress";



const C_parents = (props) => {
    return (
        <section>
            <h1>Parents</h1>
            <section>
                {props.P_parents.map(function (parents) {
                    return <section>
                        <h1>Parent</h1>
                        <p>Parent Type: {parents.parentType}</p>
                        <p>Parent Living: {parents.parentLiving}</p>
                        <p>Parent Marital Status: {parents.parentMaritalStatus}</p>
                        <p>Parent Prefix: {parents.parentPrefix}</p>
                        <C_parentName P_parentName={parents.parentName}/>
                        <p>Parent Country of Birth : {parents.parentCountryOfBirth}</p>
                        <p>Parent Occupation : {parents.parentOccupation}</p>
                        <p>Parent Education Level: {parents.parentEducationLevel}</p>
                        <C_parentMobile P_parentMobile = {parents.parentMobile}/>
                        <p>Parent Email ID: {parents.parentEmailId}</p>
                        <C_parentAddress P_parentAddress = {parents.parentAddress}/>


                    </section>
                })}
            </section>

        </section>

    )
};

export default C_parents;