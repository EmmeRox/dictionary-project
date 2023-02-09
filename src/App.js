import "./App.css";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer>
          <a
            href="https://github.com/EmmeRox/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced
          </a>{" "}
          with <FontAwesomeIcon icon={faHeart} /> by Emmeline Ocampo{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
