import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Toronto" />
      </header>

      <div className="footer text-center text-muted">
        <a
          href="https://github.com/zoeylcodes/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source
        </a>{" "}
        code by{" "}
        <a
          href="https://www.instagram.com/zoeyllions/"
          target="_blank"
          rel="noreferrer"
        >
          Zoey Leyoussi
        </a>
        ✨
      </div>
    </div>
  );
}

export default App;
