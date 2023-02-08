import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer>
          <a
            href="https://github.com/EmmeRox/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>{" "}
          by Emmeline Ocampo{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
