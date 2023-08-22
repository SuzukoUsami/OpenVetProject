import "./App.scss";
import { ReactComponent as Catto } from "./images/cat.svg";

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <div className="point"></div>
        <Catto />
      </div>
    </div>
  );
}

export default App;
