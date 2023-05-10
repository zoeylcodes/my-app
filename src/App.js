import "./Weather.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Berlin" />
      </header>

      <div className="footer text-center">
        <a
          href="https://github.com/zoeylcodes/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source
        </a>{" "}
        code by Zoey Leyoussi✨
      </div>
    </div>
  );
}

export default App;
