import { useParams } from "react-router-dom";
import { useContext } from "react";

import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

export function ProductPage() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div style={{ padding: "50px" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "60px",
        display: "flex",
        gap: "50px",
        alignItems: "center",
        backgroundColor: "#f5f0eb",
        minHeight: "80vh",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "400px",
          borderRadius: "8px",
        }}
      />

      <div>
        <h1>{product.name}</h1>

        <h2>${product.price}</h2>

        <p
          style={{
            maxWidth: "500px",
            lineHeight: "1.8",
          }}
        >
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "12px 24px",
            backgroundColor: "#3a2e2e",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}