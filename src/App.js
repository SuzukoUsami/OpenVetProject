import "./custom.scss";

// import { ReactComponent as Catto } from "./images/cat.svg"

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Filters from "./components/Filters";

function App() {
    return (
        <div className="App" data-bs-theme="dark">
            <Navbar></Navbar>
            <Filters></Filters>
            <MainContent></MainContent>
        </div>
    );
}

export default App;
