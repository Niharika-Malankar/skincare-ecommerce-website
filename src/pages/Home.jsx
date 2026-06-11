import { useEffect, useState } from "react";
import { toINR } from "../utils/currency";
import { HeroSection } from "../components/component2";
import { CollectionHeading } from "../components/component3";
import { ProductCards } from "../components/component4";
import { supabase } from "../supabase";
import { products } from "../data/products";

export function Home() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    const { data, error } = await supabase
      .from("cart")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    const mappedItems = data
      .map((item) => {
        return products.find(
          (product) => product.id === item.product_id
        );
      })
      .filter((item) => item !== undefined);

    setCartProducts(mappedItems);
  }

  return (
    <>
      <HeroSection />
      <CollectionHeading />
      <ProductCards />

      <section
        style={{
          backgroundColor: "#f5f0eb",
          padding: "40px",
          textAlign: "left",
        }}>
        <h2 style={{ marginBottom: "25px", color: "#3a2e2e" }}>
          My Cart
        </h2>

        {cartProducts.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          cartProducts.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                backgroundColor: "#fff",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div>
                <h3 style={{ margin: "0 0 10px", color: "#3a2e2e" }}>
                  {item.name}
                </h3>

                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#6a5a4a",
                    maxWidth: "500px",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>

                <h4 style={{ margin: 0, color: "#3a2e2e" }}>
                  ₹{toINR(item.price)}
                </h4>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}