import { Link } from "react-router-dom";
import React from "react";
import { products } from "../data/products";

export function ProductCards() {
  const [hoveredId, setHoveredId] = React.useState(null);

  const sectionStyle = {
    backgroundColor: "#f5f0eb",
    padding: "24px 48px 60px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  };

  const cardStyle = (id) => ({
    backgroundColor: "#faf7f4",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transform: hoveredId === id ? "translateY(-10px)" : "translateY(0)",
    transition: "all 0.3s ease",
    boxShadow:
      hoveredId === id
        ? "0 20px 40px rgba(0,0,0,0.15)"
        : "0 5px 15px rgba(0,0,0,0.05)",
  });

  const imageAreaStyle = {
    height: "300px",
    overflow: "hidden",
  };

  const infoStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#3a2e2e",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    margin: 0,
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#7a6a5a",
    lineHeight: "1.6",
    margin: 0,
  };

  const bottomRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: "12px",
  };

  const priceStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#3a2e2e",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  };

  const buttonStyle = {
    backgroundColor: "#3a2e2e",
    color: "#f5f0eb",
    border: "none",
    padding: "10px 18px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
  };

  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={cardStyle(product.id)}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={imageAreaStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={infoStyle}>
                <h3 style={nameStyle}>{product.name}</h3>

                <p style={descriptionStyle}>
                  {product.description}
                </p>

                <div style={bottomRowStyle}>
                  <span style={priceStyle}>
                    ${product.price}
                  </span>

                  <button
                    style={buttonStyle}
                    onClick={(e) => e.preventDefault()}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}