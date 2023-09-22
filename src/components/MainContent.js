import { useState, useEffect } from "react";
import { getAnimalFromId, getPartFromId } from "../api";
import _ from "lodash";

import Dog from "../images/shiba-inu.jpg";

function MainContent() {
    const [partInfo, setPartInfo] = useState("loading...");
    const [animalInfo, setAnimalInfo] = useState("loading...");

    useEffect(() => {
        async function getData() {
            setPartInfo(await getPartFromId(26));
            setAnimalInfo(await getAnimalFromId(1));
        }
        getData();
    }, []);

    function renderPoint(){
        const info = animalInfo // {name, id, parts ...}
        
        const part = _.get(info, "parts[0].position", "nope")

        console.log(part);

        return(
            <div className="point"  style={{position: "relative", left: 900, top: 173}}>X</div>
        )
    }

    return (
        <div className="mx-5 my-3">
            <div className="row justify-content-evenly">
                <div className="col-2 border border-primary">
                    sidebar - breadcrumbs
                </div>
                <div className="col-5 border border-primary-subtle">
                    <div>image with points</div>
                    <div>Animal name: {animalInfo?.name}</div>
                    <div className="image-container">
                        {renderPoint()}
                        <img src={Dog} />
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
