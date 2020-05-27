import React from "react";
import C_incomeHeads from "./incomeHeads/C_incomeHeads";

const C_income = (props) => {
    return (
        <section>
            <h1> Income </h1>
            <C_incomeHeads P_incomeHeads = {props.P_income.incomeHeads}/>
            <p>Income.totalIncome:Field: {props.P_income.totalIncome}</p>

        </section> )}

export default C_income
