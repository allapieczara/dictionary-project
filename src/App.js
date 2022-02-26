import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Space Dictionary</header>
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
        <footer className="App-footer">
          Open source code by
          <a
            href="https://github.com/allapieczara/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            Alla Pieczara
          </a>
          <br />
          <a
            href="https://www.freepik.com/vectors/background"
            rel="noreferrer"
            target="_blank"
          >
            Background vector created by tartila - www.freepik.com
          </a>
        </footer>
      </div>
    </div>
  );
}
