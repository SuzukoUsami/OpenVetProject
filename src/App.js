import "./custom.scss";

// import { ReactComponent as Catto } from "./images/cat.svg"

import Navbar from "./Navbar";
import MainContent from "./MainContent";

function App() {
    return (
        <div className="App" data-bs-theme="dark">
            <Navbar></Navbar>
            <MainContent></MainContent>
        </div>
    );
}

export default App;