import React from "react";
import C_years from "./years/C_years";

const C_breaks = (props) => {
    return (
        <section>
            <h1> Breaks:Array </h1>
            <section>{
                props.P_breaks.map(function (breaks) {
                    return<section><h1>Breaks:Array Array List</h1>
                        <C_years P_years = {breaks.years}/>
                        <p>Breaks.reason:Element: {breaks.reason}</p>

                    </section>})}
            </section>
        </section> )}
export default C_breaks
