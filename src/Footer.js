import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="footer">
        <p>
          {" "}
          Built by <span className="span-footer-name">Nicole Orbe</span> and
          lots of
          <span className="span-footer-coffee" role="img" aria-label="coffee">
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
