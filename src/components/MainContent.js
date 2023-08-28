import { useState, useEffect } from "react";
import getPartFromId from "../api";

import { ReactComponent as Cat } from "../images/cat.svg";

function MainContent() {
    const [partInfo, setPartInfo] = useState("loading...");

    useEffect(() => {
        async function getData() {
            const data = await getPartFromId(26);
            setPartInfo(data);
        }
        getData();
    }, []);

    return (
        <div className="mx-5 my-3">
            <div className="row justify-content-evenly">
                <div className="col-2 border border-primary">
                    sidebar - breadcrumbs
                </div>
                <div className="col-5 border border-primary-subtle">
                    <div>image with points</div>
                    <div className="image-container">
                        <div className="point">X</div>
                        <Cat />
                    </div>
                </div>
                <div className="col-4 border border-primary-subtle">
                    <ul>
                        <li>selected part name: {partInfo?.name}</li>

                        <li>description: {partInfo?.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
