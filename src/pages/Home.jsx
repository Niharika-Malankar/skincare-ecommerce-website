import { HeroSection } from "../components/component2";
import { CollectionHeading } from "../components/component3";
import { ProductCards } from "../components/component4";
import { CartSection } from "../components/CartSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <CollectionHeading />
      <ProductCards />
      <CartSection />
    </>
  );
}