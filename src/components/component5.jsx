import leafIcon from "./leaf1.png";
import scienceIcon from "./science1.png";
import bunnyIcon from "./bunny1.png";
export function Footer() {
  const footerStyle = {
    backgroundColor: "#3a2e2e",
    padding: "60px 48px 30px",
    color: "#f5f0eb",
    fontFamily: "Georgia, serif",
  };

  const topGridStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "40px",
    paddingBottom: "40px",
    borderBottom: "1px solid rgba(245,240,235,0.15)",
    marginBottom: "28px",
  };

  const logoStyle = {
    fontSize: "34px",
    fontWeight: "700",
    letterSpacing: "2px",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    margin: "0 0 8px 0",
    color: "#f5f0eb",
  };

  const taglineStyle = {
    fontSize: "16px",
    color: "#c0b0a0",
    fontStyle: "italic",
    margin: "0 0 20px 0",
    lineHeight: "1.7",
  };

  const newsletterInputStyle = {
    display: "flex",
    gap: 0,
    marginTop: "16px",
  };

  const inputStyle = {
    flex: 1,
    padding: "12px 16px",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRight: "none",
    color: "#f5f0eb",
    fontSize: "15px",
    fontFamily: "Georgia, serif",
    outline: "none",
  };

  const inputBtnStyle = {
    backgroundColor: "#c9b8a8",
    color: "#3a2e2e",
    border: "none",
    padding: "12px 20px",
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
    fontWeight: "600",
  };

  const colTitleStyle = {
    fontSize: "15px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#c9b8a8",
    margin: "0 0 18px 0",
    fontWeight: "600",
  };

  const colItemStyle = {
    fontSize: "15px",
    color: "#9a8878",
    margin: "0 0 12px 0",
    lineHeight: "1.5",
    cursor: "default",
  };

  const bottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const copyStyle = {
    fontSize: "14px",
    color: "#6a5a4a",
    letterSpacing: "0.5px",
  };

  const pillsStyle = {
    display: "flex",
    gap: "10px",
  };

 const pillStyle = {
  fontSize: "13px",
  color: "#8a7a6a",
  border: "1px solid #5a4a3a",
  padding: "6px 14px",
  borderRadius: "20px",
  letterSpacing: "0.5px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

  const footerIconStyle = {
  width: "18px",
  height: "18px",
  objectFit: "contain",
};

 return (
  <footer style={footerStyle}>
    <div style={topGridStyle}>
      <div>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#9a8878",
            textTransform: "uppercase",
            margin: "0 0 4px 0",
          }}
        >
          Beauty in
        </p>

        <h3 style={logoStyle}>LUMORA</h3>

        <p style={taglineStyle}>
          Science-engineered skincare
          <br />
          for your skin's peak performance.
        </p>

        <p style={{ ...colTitleStyle, marginBottom: "8px" }}>
          Newsletter
        </p>

        <div style={newsletterInputStyle}>
          <input
            style={inputStyle}
            type="email"
            placeholder="your@email.com"
          />
          <button style={inputBtnStyle}>Join</button>
        </div>
      </div>

      <div>
        <p style={colTitleStyle}>Shop</p>
        {["Serums", "Cleansers", "Essences", "Eye Care", "New Arrivals"].map(
          (i) => (
            <p key={i} style={colItemStyle}>
              {i}
            </p>
          )
        )}
      </div>

      <div>
        <p style={colTitleStyle}>Learn</p>
        {["Our Science", "Ingredients", "Skin Fitness", "Blog", "Reviews"].map(
          (i) => (
            <p key={i} style={colItemStyle}>
              {i}
            </p>
          )
        )}
      </div>

      <div>
        <p style={colTitleStyle}>Help</p>
        {["Account", "Orders", "Returns", "Contact Us", "FAQ"].map((i) => (
          <p key={i} style={colItemStyle}>
            {i}
          </p>
        ))}
      </div>
    </div>

    {/* Bottom Footer */}
    <div style={bottomStyle}>
      <p style={copyStyle}>© 2026 Lumora. All rights reserved.</p>

      <div style={pillsStyle}>
        <span style={pillStyle}>
          <img
            src={leafIcon}
            alt="Clean"
            style={footerIconStyle}
          />
          Clean
        </span>

        <span style={pillStyle}>
          <img
            src={scienceIcon}
            alt="Science"
            style={footerIconStyle}
          />
          Science
        </span>

        <span style={pillStyle}>
          <img
            src={bunnyIcon}
            alt="Cruelty Free"
            style={footerIconStyle}
          />
          Cruelty Free
        </span>
      </div>
    </div>
  </footer>
);
}
