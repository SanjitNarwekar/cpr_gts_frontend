import React from "react";

const C_recommendationLetters = (props) => {
    return (
        <section>
            <h1>Recommendation Letters</h1>
            <section>
                {props.P_recomenddationLetters.map(function(recommendationLetters) {
                    return <section>
                        <h1>Recommendation Letter</h1>
                        <p>Recommended By: {recommendationLetters.recommendedBy}</p>
                        <p>Letter Attachment : {recommendationLetters.letterAttachment}</p>
                    </section>
                })}
            </section>
        </section>

    )
}

export default C_recommendationLetters;