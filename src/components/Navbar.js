import PurpleCatLogo from "../images/Logo-cat-purrrple-wbg.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Navbar() {
    const [showMeTheAsk, setShowMeTheAsk] = useState();

    return (
        <div>
            <nav className="navbar bg-body-tertiary nav-style d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col align-self-start">
                            <img
                                src={PurpleCatLogo}
                                alt="Logo"
                                width="70"
                                height="70"
                                className=" "
                            />
                            <div className="col nav-text d-inline-block">
                                OpenVetProject
                            </div>
                        </div>
                        <div className="col align-self-end">
                            <SearchBar
                                onAddAsk={(theAsk) => {
                                    setShowMeTheAsk(theAsk);
                                }}
                            />
                        </div>
                        {/* <div>You asked for: {showMeTheAsk}</div> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
