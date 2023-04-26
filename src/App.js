import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Dallas" />
      </div>
      <footer className="footer">
        <p>
          {" "}
          Built by <span className="brand-name">Nicole Orbe</span> and lots of
          <span className="footer-icon" role="img" aria-label="coffee">
            ☕
          </span>{" "}
          and is{" "}
          <a
            href="https://github.com/nicoleorbe/react-weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weatherapp.thenicoleorbe.com/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
