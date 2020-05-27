import React from "react";
import C_analysisForStudyLevelChosen from "./analysisForStudylevelChosen/C_analysisForStudyLevelChosen";

const C_careerPaths = (props) => {
    return (
        <section>  <h1> Paths:Array </h1>
            <section>{
                props.P_careerPaths.map(function (careerPaths) {
                    return <section>
                        <h1>Paths:Array Array List</h1>
                        <p>CareerPaths.pathNumber:Element: {careerPaths.pathNumber}</p>
                        <p>CareerPaths.preparationThruFACT:Element: {careerPaths.preparationThruFACT}</p>
                        <p>CareerPaths.statingEduLvl:Element: {careerPaths.statingEduLvl}</p>
                        <p>CareerPaths.plannedHighestEduLvl:Element: {careerPaths.plannedHighestEduLvl}</p>

                        <C_analysisForStudyLevelChosen P_analysisForStudyLevelChosen = {careerPaths.analysisForStudyLevelChosen}/>

                    </section>})}
            </section>
        </section> )}

        export default C_careerPaths




