import React from "react";
import C_SATTestDate from "./SATTestDate/C_SATTestDate";
import C_SATSectionScores from "./SATSectionScores/C_SATSectionScores";
import C_SATScoreEssay from "./SATScoreEssay/C_SATScoreEssay";

const C_SATTest = (props) => {
    return (
        <section>
            <h1>SAT Scores</h1>
            <section>
                {
                    props.P_SATTest.map(function(SATTest){
                        return <section>
                            <h1>SAT Test Score</h1>
                            <C_SATTestDate P_SATTestDate = {SATTest.SATTestDate} />
                            <C_SATSectionScores P_SATsectionScores = {SATTest.SATSectionScores}/>
                            <p>Score Total: {SATTest.scoreTotal}</p>
                            <C_SATScoreEssay P_SATScoreEssay = {SATTest.scoreEssay}/>

                        </section>

                    })
                }
            </section>

        </section>

    )
}

export default C_SATTest;
