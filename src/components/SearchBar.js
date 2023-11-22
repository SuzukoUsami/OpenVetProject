import { useState } from "react";

function SearchBar({ onAddAsk }) {
    const [ask, setAsk] = useState(" ");

    const onInputChange = (e) => {
        setAsk(e.target.value);
        onAddAsk(e.target.value);
    };

    return (
        <div>
            <div className="input-group mb-3 d-flex">
                <input
                    type="text"
                    className="form-control searchbar-input"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="button-addon2"
                    value={ask}
                    onChange={(e) => {
                        onInputChange(e);
                    }}
                />
                <button
                    className="btn btn-outline searchbar-button "
                    type="button"
                    id="button-addon2"
                >
                    Search
                </button>
            </div>
            {ask}
        </div>
    );
}

export default SearchBar;
