export function CollectionHeading() {
  const sectionStyle = {
    backgroundColor: "#f5f0eb",
    padding: "48px 48px 24px",
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "6px",
  };

  const dotStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#3a2e2e",
  };

  const labelStyle = {
    fontSize: "20px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    color: "#3a2e2e",
    fontWeight: "700",
  };

  const dividerStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "#ddd6ce",
    marginTop: "20px",
  };

  const featureRowStyle = {
    display: "flex",
    gap: "48px",
    marginTop: "20px",
    paddingBottom: "10px",
  };

  const featureStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px",
    color: "#7a6a5a",
    fontFamily: "Georgia, serif",
    letterSpacing: "0.5px",
  };

  return (
    <section style={sectionStyle}>
      <div style={rowStyle}>
        <div style={dotStyle}></div>
        <span style={labelStyle}>The Collection</span>
      </div>
      <div style={featureRowStyle}>
        <span style={featureStyle}>🌿 Clean Ingredients</span>
        <span style={featureStyle}>🔬 Science-Backed</span>
        <span style={featureStyle}>✨ Natural Formulas</span>
        <span style={featureStyle}>🐰 Cruelty Free</span>
      </div>
      <div style={dividerStyle}></div>
    </section>
  );
}
