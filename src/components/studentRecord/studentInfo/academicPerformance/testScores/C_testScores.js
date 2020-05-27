import React from "react";
import C_SATTest from "./SATTest/C_SATTest";
import C_subjectSATTest from "./subjectSATTest/C_subjectSATTest";
import C_ACTTest from "./ACTTest/C_ACTTest";
import C_TOEFLTest from "./TOEFLTest/C_TOEFLTest";
import C_IELTSTest from "./IELTSTest/C_IELTSTest";
import C_advancedPlacementTest from "./advancedPlacementTest/C_advancedPlacementTest";
import C_ibSubjectsTest from "./ibSubjectsTest/C_ibSubjectsTest";
import C_cambridgeALevelSubjectsTest from "./cambridgeALevelSubjectsTest/C_cambridgeALevelSubjectsTest";
import C_GRETest from "./GRETest/C_GRETest";
import C_GMATTest from "./GMATTest/C_GMATTest";



const C_testScores = (props) => {
    return (
        <section>
            <h1>Test Scores</h1>
            <C_SATTest P_SATTest = {props.P_testScores.SATTest}/>
            <C_subjectSATTest P_subjectSATTest = {props.P_testScores.subjectSATTest}/>
            <C_ACTTest P_ACTTest = {props.P_testScores.ACTTest}/>
            <C_TOEFLTest P_TOEFLTest = {props.P_testScores.TOEFLTest}/>
            <C_IELTSTest P_IELTSTest = {props.P_testScores.IELTSTest}/>
            <C_advancedPlacementTest P_advancedPlacementTest = {props.P_testScores.advancedPlacementTest}/>
            <C_ibSubjectsTest P_ibSubjectTest = {props.P_testScores.ibSubjectsTest} />
            <C_cambridgeALevelSubjectsTest P_cambridgeALevelSubjectsTest = {props.P_testScores.cambridgeALevelSubjectsTest}/>
            < C_GRETest P_GRETest = {props.P_testScores.GRETest}/>
            <C_GMATTest P_GMATTest = {props.P_testScores.GMATTest}/>
        </section>

    )
}

export default C_testScores;