import React from "react";


const C_workExperience = (props) => {
    return (
        <section>
            <h1>Work Experiences</h1>
            <section>
                {
                    props.P_workExperience.map(function (workExperience) {
                       return <section>
                            <h1>Work Experience</h1>
                            <p>employer: {workExperience.employer}</p>
                            <p>startDate: {workExperience.startDate}</p>
                            <p>endDate: {workExperience.endDate}</p>
                            <p>currentEmployer: {workExperience.currentEmployer}</p>
                            <p>jobTitle: {workExperience.jobTitle}</p>
                            <p>natureOfWork: {workExperience.natureOfWork}</p>
                            <p>fullOrPartTime: {workExperience.fullOrPartTime}</p>
                            <p>paidOrUnpaid: {workExperience.paidOrUnpaid}</p>
                            <p>recommendationOrExperienceLetter: {workExperience.recommendationOrExperienceLetter}</p>
                        </section>
                    })
                }
            </section>


        </section>

    )
};

export default C_workExperience;