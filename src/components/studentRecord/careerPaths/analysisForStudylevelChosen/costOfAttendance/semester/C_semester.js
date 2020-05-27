import React from "react";
import C_options from "./options/C_options";
import C_expenses from "./expenses/C_expenses";
import C_income from "./income/C_income";



const C_semester = (props) => {
    return (
        <section>  <h1> Semester:Array </h1> <section>{
            props.P_semester.map(function (semester) {
                return <section>
                    <h1>Semester:Array Array List</h1>
                    <C_options P_options = {semester.options}/>
                    <C_expenses P_expenses = {semester.expenses}/>
                    <C_income P_income = {semester.income}/>
                    <p>Semester.netCostForSemester:Element: {semester.netCostForSemester}</p>
                    <p>Semester.eligibilityForWorkPermitOrPR:Element: {semester.eligibilityForWorkPermitOrPR}</p>
                    <p>Semester.semesterNumber:Element: {semester.semesterNumber}</p>



                </section>})}
        </section>
        </section> )}
export default C_semester
