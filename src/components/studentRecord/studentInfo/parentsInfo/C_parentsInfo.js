import React from "react";
import C_parents from "./parents/C_parents";


const C_parentsInfo = (props) => {
    return (
        <section>
            <h1>ParentsInfo</h1>
            <p>Permanent Home Guardian: {props.P_parentsInfo.permanentHomeGuardian}</p>
            <C_parents P_parents = {props.P_parentsInfo.parents}/>
        </section>

    )
}

export default C_parentsInfo;