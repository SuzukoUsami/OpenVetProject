import React from "react";

export default function Point({position, onClick}) {
    return (
        <button
            className="btn btn-pointer rounded-circle"
            style={{
                left: (position[0] - 9),
                top: (position[1] - 9),
            }}
            onClick={onClick}
        ></button>
    );
}
