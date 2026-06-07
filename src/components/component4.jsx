import React from "react";
import resetSerum from "./resetSerum.jpg";
import cleansingFoam from "./cleansingFoam.webp";
import hydraEssence from "./hydraEssence.jpg";
import nutritionElixir from "./nutritionElixir.webp";

export function ProductCards() {
  const [hoveredId, setHoveredId] = React.useState(null);

  const products = [
    {
      id: 1,
      image: resetSerum,
      name: "Reset Serum",
      subtitle: "Skin Radiance · Pore Minimizer",
      price: "$48",
      tag: "new",
      bg: "#e8ddd4",
      ingredients: "Niacinamide · Hyaluronic Acid",
    },
    {
      id: 2,
      image: cleansingFoam,
      name: "Cleansing Foam",
      subtitle: "Deep Clean · Brightening",
      price: "$32",
      tag: null,
      bg: "#dce8e0",
      ingredients: "Centella · Green Tea",
    },
    {
      id: 3,
      image: hydraEssence,
      name: "Hydra Essence",
      subtitle: "Moisture Boost · Plumping",
      price: "$54",
      tag: "new",
      bg: "#e4dcea",
      ingredients: "Ceramide · Peptide",
    },
    {
      id: 4,
      image: nutritionElixir,
      name: "Nutrition Elixir",
      subtitle: "Repair · Antioxidant",
      price: "$68",
      tag: null,
      bg: "#dde8d8",
      ingredients: "Bakuchiol · Squalane",
    },
  ];

  const sectionStyle = {
    backgroundColor: "#f5f0eb",
    padding: "24px 48px 60px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  };

  const cardStyle = (bg, id) => ({
    backgroundColor: bg,
    borderRadius: "2px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transform: hoveredId === id ? "translateY(-10px)" : "translateY(0)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: hoveredId === id ? "0 20px 40px rgba(0,0,0,0.15)" : "0 0px 0px rgba(0,0,0,0)",
  });

  const imageAreaStyle = (bg) => ({
    height: "240px",
    backgroundColor: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  });

  const tagStyle = {
    position: "absolute",
    top: "12px",
    left: "12px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "lowercase",
    color: "#3a2e2e",
    fontFamily: "Georgia, serif",
    zIndex: 1,
  };

  const tagDotStyle = {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: "#3a2e2e",
  };

  const infoStyle = {
    backgroundColor: "#faf7f4",
    padding: "18px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flex: 1,
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#3a2e2e",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    letterSpacing: "0.5px",
    margin: 0,
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#9a8a7a",
    fontFamily: "Georgia, serif",
    letterSpacing: "0.3px",
    margin: 0,
  };

  const ingredientsStyle = {
    fontSize: "13px",
    color: "#b0a090",
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
    margin: "2px 0 8px 0",
  };

  const bottomRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: "8px",
    borderTop: "1px solid #e8e0d8",
  };

  const priceStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#3a2e2e",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  };

  const buyBtnStyle = {
    backgroundColor: "#3a2e2e",
    color: "#f5f0eb",
    border: "none",
    padding: "9px 20px",
    fontSize: "14px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
    fontWeight: "500",
    borderRadius: "1px",
  };

  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle(product.bg, product.id)}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={imageAreaStyle(product.bg)}>
              {product.tag && (
                <div style={tagStyle}>
                  <div style={tagDotStyle}></div>
                  {product.tag}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={infoStyle}>
              <p style={nameStyle}>{product.name}</p>
              <p style={subtitleStyle}>{product.subtitle}</p>
              <p style={ingredientsStyle}>{product.ingredients}</p>
              <div style={bottomRowStyle}>
                <span style={priceStyle}>{product.price}</span>
                <button style={buyBtnStyle}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
