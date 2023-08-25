import { useState } from "react";

function SearchBar({ onAddAsk }) {
    const [ask, setAsk] = useState("ask???");

    const onInputChange = (e) => {
        setAsk(e.target.value)
        onAddAsk(e.target.value)
    };

    return (
        <div>
            <form role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={ask}
                    onChange={(e) => {
                        onInputChange(e)
                    }}
                />

                <button className="btn btn-outline-success p-2" type="submit">
                    Search
                </button>
            </form>
            {ask}
        </div>
    );
}

export default SearchBar;
