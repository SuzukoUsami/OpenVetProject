// import { useState } from "react"

function DefinitonList({ definitions, onChangeDefinition }) {
    return (
        <div>
            {definitions.map((definition) => (
                <div key={definition.id}>
                    {/* <Task
                        definition={definition}
                        onChange={onChangeDefinition}
                    /> */}
                </div>
            ))}
        </div>
    )
}

export default DefinitonList
