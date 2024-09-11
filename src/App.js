import "./App.css";
import Weather from "./Weather.js";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <footer>
          This projet was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/118933-karelle-bolon"
            target="_blank"
            rel="noreferrer"
          >
            Karelle Bolon
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/karellemarina/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and in{" "}
          <a
            href="https://myreactweather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
