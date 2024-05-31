import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Nairobi" />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://weather-app-react-a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Loise Musungu
          </a>{" "}
          and is
          <a
            href="https://github.com/Shecodes2024/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://weather-app-react-ke.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
