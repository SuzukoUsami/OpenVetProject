import SearchBar from "./SearchBar"
import DefinitonList from "./DefinitionList"

import { useState } from "react"

let nextId = 2
const initialDefinitions = [
    { id: 0, title: "Paw bones" },
    { id: 1, title: "Tail bones" },
]

function SearchBarInput() {
    const [definitions, setDefinitions] = useState(initialDefinitions)

    function handleAddDefinition(title) {
        setDefinitions([
            ...definitions,
            {
                id: nextId++,
                title: title,
            },
        ])
    }

    function handleChangeDefiniton(nextDefinition) {
        setDefinitions(
            definitions.map((t) => {
                if (t.id === nextDefinition.id) {
                    return nextDefinition
                } else {
                    return t
                }
            })
        )
    }

    return (
        <div>
            <SearchBar onAddDefiniton={handleAddDefinition} />

            <DefinitonList
                definitions={definitions}
                onChangeDefinition={handleChangeDefiniton}
            />
        </div>
    )
}

export default SearchBarInput
