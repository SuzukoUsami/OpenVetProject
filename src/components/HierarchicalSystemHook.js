import { useState } from "react";
import { ReactComponent as ArrowDown } from '../images/chevron-down.svg';
import { ReactComponent as ArrowUp } from '../images/chevron-up.svg';

export default function HierarchicalSystemHook({ title, content }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>
                    {title}
                    {isActive ? <ArrowUp className="accordion-arrow img-fluid" /> : <ArrowDown className="accordion-arrow img-fluid" />}
                </div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    )
}