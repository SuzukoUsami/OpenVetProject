import { useState } from "react"

function SearchBar({ onAddDefinition }) {
    const [definition, setDefinition] = useState("")

    return (
        <div>
            <form role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={definition}
                    onChange={(e) => setDefinition(e.target.value)}
                />

                <button
                    className="btn btn-outline-success p-2"
                    type="submit"
                    onClick={() => {
                        setDefinition("")
                        onAddDefinition(definition)
                    }}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
