import "./App.css";
import Weather from "./Weather.js";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This projet was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/118933-karelle-bolon"
            target="_blank"
          >
            Karelle Bolon
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/karellemarina/my-react-weather-app"
            target="_blank"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
