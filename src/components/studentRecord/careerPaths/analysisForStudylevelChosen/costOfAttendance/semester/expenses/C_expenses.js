import React from "react";
import C_expensesHeads from "./expensesHeads/C_expensesHeads";

const C_expenses = (props) => {
    return (
        <section>
            <h1> Expenses </h1>
            <C_expensesHeads P_expensesHeads = {props.P_expenses.expensesHeads} />
            <p>Expenses.totalExpenses:Field: {props.P_expenses.totalExpenses}</p>

        </section> )}

    export default C_expenses
