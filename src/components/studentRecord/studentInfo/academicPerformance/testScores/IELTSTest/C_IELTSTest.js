import React from "react";
import C_IELTSTestDate from "./IELTSTestDate/C_IELTSTestDate";
import C_IELTSSectionScores from "./IELTSSectionScores/C_IELTSSectionScores";

const C_IELTSTest = (props) => {
    return (
        <section>
            <h1>IELTS Scores</h1>

            <section>
                {
                    props.P_IELTSTest.map(function (IELTSTest) {
                        return <section>
                            <h1>IELTS Test Score</h1>
                            <C_IELTSTestDate P_IELTSTestDate = {IELTSTest.IELTSTestDate}/>
                            <C_IELTSSectionScores P_IELTSSectionScores = {IELTSTest.IELTSSectionScores}/>

                        </section>
                    })
                }
            </section>




        </section>

    )
}

export default C_IELTSTest;