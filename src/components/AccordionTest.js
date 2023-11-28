import { useState } from "react"
import React from "react";

export default function AccordionTest() {

    const accordionData = {
        title: 'Section 1',
        content: 'Lorem ipsum...'
    };

    const { title, content } = accordionData

    // -------------------------------------------------------

    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            <div> Accordion Test </div>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title"
                        onClick={() => setIsActive(!isActive)} >
                        <div>{title}</div>
                        <div> {isActive ? '-' : '+'} </div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
        </React.Fragment>
    )



}