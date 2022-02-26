import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Space Dictionary</header>
        <main>
          <Dictionary defaultKeyword="universe"/>
        </main>
        <footer className="App-footer">Coded by Alla Pieczara</footer>
      </div>
    </div>
  );
}
