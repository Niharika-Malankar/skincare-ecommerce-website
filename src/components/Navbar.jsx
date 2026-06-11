import { Link } from "react-router-dom";

export function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    backgroundColor: "#f5f0eb",
    borderBottom: "1px solid #e0d8d0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const leftLinksStyle = {
    display: "flex",
    gap: "36px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const rightLinksStyle = {
    display: "flex",
    gap: "36px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#3a2e2e",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: "600",
  };

  const logoStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#3a2e2e",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    letterSpacing: "2px",
    margin: 0,
    textAlign: "center",
  };

  const logoSubStyle = {
    fontSize: "11px",
    letterSpacing: "3px",
    color: "#8a7a6a",
    textTransform: "uppercase",
    fontFamily: "Georgia, serif",
    display: "block",
    textAlign: "center",
  };

  return (
    <nav style={navStyle}>
      <ul style={leftLinksStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Science
          </Link>
        </li>

        <li>
          <Link to="/" style={linkStyle}>
            Us
          </Link>
        </li>

        <li>
          <Link to="/" style={linkStyle}>
            Shop
          </Link>
        </li>
      </ul>

      <div style={{ textAlign: "center" }}>
        <span style={logoSubStyle}>The Science of</span>

        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h1 style={logoStyle}>LUMORA</h1>
        </Link>
      </div>

      <ul style={rightLinksStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Account
          </Link>
        </li>

        <li>
          <Link to="/" style={linkStyle}>
            Shopping Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}