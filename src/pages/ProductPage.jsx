import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { supabase } from "../supabase";
import { toINR } from "../utils/currency";

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  async function handleAddToCart() {
    const { error } = await supabase
      .from("cart")
      .insert([
        {
          product_id: product.id,
        },
      ]);

    if (error) {
      console.log(error);
      alert("Failed to add product");
      return;
    }

    alert(`${product.name} added to cart!`);
    navigate("/");
  }

  return (
    <div
      style={{
        padding: "60px",
        display: "flex",
        gap: "50px",
        backgroundColor: "#f5f0eb",
        minHeight: "80vh",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "400px", borderRadius: "10px" }}
      />

      <div>
        <h1>{product.name}</h1>
        <h2>₹{toINR(product.price)}</h2>

        <p style={{ maxWidth: "500px", lineHeight: "1.8" }}>
          {product.description}
        </p>

        <button
          onClick={handleAddToCart}
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