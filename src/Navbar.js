import PurpleCatLogo from "./images/Logo-cat-purrrple-wbg.svg"
import SearchBar from "./components/SearchBar"

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col align-self-start">
                            <img
                                src={PurpleCatLogo}
                                alt="Logo"
                                width="50"
                                height="50"
                                className="d-inline-block align-text-center"
                            />
                            OpenVetProject
                        </div>
                        <div className="col align-self-end">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
