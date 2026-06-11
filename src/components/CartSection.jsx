import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function CartSection() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        backgroundColor: "#faf7f4",
        padding: "60px",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          color: "#3a2e2e",
        }}
      >
        My Cart
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <h3>{item.name}</h3>

            <p>₹{toINR(item.price)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}