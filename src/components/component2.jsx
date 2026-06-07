import heroImage from "./model5.jpg";

export function HeroSection() {
  const sectionStyle = {
    position: "relative",
    width: "100%",
    height: "580px",
    overflow: "hidden",
    backgroundColor: "#c9b8a8",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "70px",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
    zIndex: 1,
  };

  const imgStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
  };

  const headingStyle = {
    fontSize: "72px",
    fontWeight: "700",
    letterSpacing: "6px",
    textTransform: "uppercase",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    margin: "0 0 16px 0",
    textShadow: "0 2px 20px rgba(0,0,0,0.3)",
  };

  const subStyle = {
    fontSize: "24px",
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
    fontWeight: "400",
    margin: 0,
    opacity: 0.95,
    lineHeight: "1.6",
  };

  const bubbleStyle = (size, top, left, opacity) => ({
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    border: "1.5px solid rgba(255,255,255,0.4)",
    top,
    left,
    opacity,
    zIndex: 0,
    pointerEvents: "none",
  });

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={bubbleStyle("120px", "10%", "5%", 0.3)}></div>
      <div style={bubbleStyle("80px", "60%", "8%", 0.2)}></div>
      <div style={bubbleStyle("160px", "-5%", "75%", 0.25)}></div>
      <div style={bubbleStyle("60px", "70%", "85%", 0.2)}></div>
      <img src={heroImage} alt="Skincare model" style={imgStyle} />
      <div style={contentStyle}>
        <h2 style={headingStyle}>Pure Skincare</h2>
        <p style={subStyle}>
          engineered for<br />your skin's peak performance
        </p>
      </div>
    </section>
  );
}
