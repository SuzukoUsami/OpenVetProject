import _ from "lodash";
import { useState, useEffect, Fragment } from "react";
import { getAnimalFromId, getPartFromId } from "../api";
import { imageScaler, pointScaler, ratioCalculator } from "./imageScaler";

import Dog from "../images/shiba-inu.jpg";
import Point from "./Point";
import HierarchicalSystem from "./HierarchicalSystem";

function MainContent() {
    const [partInfo, setPartInfo] = useState(undefined);
    const [animalInfo, setAnimalInfo] = useState(undefined);

    useEffect(() => {
        async function getData() {
            setPartInfo(await getPartFromId(26));
            setAnimalInfo(await getAnimalFromId(1));
        }
        getData();
    }, []);

    function renderPoints() {
        const parts = _.get(animalInfo, "parts", undefined); // {name, id, parts ...}
        if (parts === undefined) {
            return null;
        }

        const scalingRatio = ratioCalculator(
            _.get(animalInfo, "dimensions"),
            [700, 0]
        );

        const mappedPoints = parts.map((part, index) => {
            const position = pointScaler(part.position, scalingRatio);
            //console.log(scalingRatio, part.position, index);
            return (
                <Point
                    position={position}
                    key={part.id}
                    onClick={() => console.log(part.name)}
                ></Point>
            );
        });

        return <Fragment>{mappedPoints}</Fragment>;
    }

    function renderImage() {
        const targetDimensions = imageScaler(
            _.get(animalInfo, "dimensions"),
            [700, 0]
        );
        return (
            <img
                src={Dog}
                alt="doggo"
                style={{
                    width: targetDimensions[0],
                    height: targetDimensions[1],
                }}
            />
        );
    }

    return (
        <div className="mx-5 my-3">
            <div className="row justify-content-evenly">
                <div className="col-2 border border-primary">
                    <HierarchicalSystem />
                </div>
                <div className="col-5 border border-primary-subtle">
                    <div>image with points</div>
                    <div>Animal name: {animalInfo?.name}</div>
                    <div className="image-container">
                        {animalInfo ? renderPoints() : "loading..."}
                        {animalInfo ? renderImage() : "loading..."}
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
