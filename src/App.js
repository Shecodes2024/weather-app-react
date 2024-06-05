import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://github.com/loisemusungu"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Loise Musungu
          </a>{" "}
          and is
          <a
            href="https://github.com/loisemusungu/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
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
