import PurpleCatLogo from "../images/Logo-cat-purrrple-wbg.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Navbar() {
    const [showMeTheAsk, setShowMeTheAsk] = useState();

    return (
        <div>
            <nav className="navbar bg-body-tertiary nav-style d-flex align-items-center justify-content-between">
                <div className="">
                    <img
                        src={PurpleCatLogo}
                        alt="Logo"
                        width="70"
                        height="70"
                        className=""
                    />
                    <div className="nav-text d-inline-block">
                        OpenVetProject
                    </div>
                </div>
                <div className="d-flex me-5">
                    <SearchBar
                        onAddAsk={(theAsk) => {
                            setShowMeTheAsk(theAsk);
                        }}
                    />
                </div>
                {/* <div>You asked for: {showMeTheAsk}</div> */}
            </nav>
        </div>
    );
}

export default Navbar;
