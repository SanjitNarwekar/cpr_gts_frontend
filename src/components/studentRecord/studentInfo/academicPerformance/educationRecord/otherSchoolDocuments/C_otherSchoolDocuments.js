

import React from "react";

const C_otherSchoolDocuments = (props) => {
    return (
        <section>
            <h1>Other School Document</h1>
            <section>
                {props.P_otherSchoolDocument.map(function(otherSchoolDocuments) {
                    return <section>
                        <h1>Document</h1>
                        <p>Document Title: {otherSchoolDocuments.documentTitle}</p>
                        <p>Document Attachment: {otherSchoolDocuments.documentAttachment}</p>
                    </section>
                })}
            </section>
        </section>

    )
}

export default C_otherSchoolDocuments;