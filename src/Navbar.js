import PurpleCatLogo from "./images/Logo-cat-purrrple-wbg.svg"

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
                        <form className="col align-self-end" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success p-2"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
