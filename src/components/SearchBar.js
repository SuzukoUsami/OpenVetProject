import { useState } from "react";
import { ReactComponent as SearchIcon } from "../images/magnifying-glass.svg";

function SearchBar({ onAddAsk }) {
    const [ask, setAsk] = useState("");

    const onInputChange = (e) => {
        setAsk(e.target.value);
        onAddAsk(e.target.value);
    };

    return (
        <>
            <div className="input-group">
                <input
                    type="text"
                    id="searchbar-input"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="searchbar-button"
                    value={ask}
                    onChange={(e) => {
                        onInputChange(e);
                    }}
                />
                <button
                    className="btn searchbar-button align-items-center"
                    type="button"
                    id="searchbar-button"
                >
                    <SearchIcon id="search-icon" className="img-fluid" />
                </button>
            </div>
            {ask}
        </>
    );
}

export default SearchBar;
