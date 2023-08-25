import "./custom.scss"

// import { ReactComponent as Catto } from "./images/cat.svg"

import Navbar from "./Navbar"
import SearchBarInput from "./components/SearchBarInput"

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <SearchBarInput></SearchBarInput>
            {/* <div className="image-container">
                <div className="point"></div>
                <Catto />
            </div> */}
        </div>
    )
}

export default App
