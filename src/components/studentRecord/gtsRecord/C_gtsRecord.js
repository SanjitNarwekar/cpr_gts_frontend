import React from "react";

const C_gtsRecord = (props) => {
    return (
        <section>
            <h1>GtsRecord</h1>
            <p>gtsRecord.collegeSettingPreferred: {props.P_gtsRecord.collegeSettingPreferred}</p>
            <p>gtsRecord.collegeSizePreferred: {props.P_gtsRecord.collegeSizePreferred}</p>
            <p>gtsRecord.essayOption: {props.P_gtsRecord.essayOption}</p>
            <p>gtsRecord.essay: {props.P_gtsRecord.essay}</p>
            <p>gtsRecord.areasOfStudy: {props.P_gtsRecord.areasOfStudy}</p>
            <p>gtsRecord.major: {props.P_gtsRecord.major}</p>
            <p>gtsRecord.ferpaunderstood: {props.P_gtsRecord.ferpaUnderstood}</p>
            <p>gtsRecord.ferpaack: {props.P_gtsRecord.ferpaAck}</p>
            <p>gtsRecord.selectopt: {props.P_gtsRecord.selectOpt}</p>
            <p>gtsRecord.ferpawaiver: {props.P_gtsRecord.ferpaWaiver}</p>
            <p>gtsRecord.signature: {props.P_gtsRecord.signature}</p>
            <p>gtsRecord.ferpaDate: {props.P_gtsRecord.ferpaDate}</p>


        </section>

    )
}

export default C_gtsRecord;