import { useLocation } from "react-router-dom";


function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className={`header ${isHome ? "fixed" : "absolute"}`}>
        <a href="/"><h1>Kimia Senichault</h1></a>
      </div>

      <div className={`header-links ${isHome ? "fixed" : "absolute"}`}>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a
          href="https://www.linkedin.com/in/kimia-senichault"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/linkedin.svg" alt="LinkedIn" id="linkedin" /> LinkedIn
        </a>
      </div>
    </>
  );
}

export default Header;