
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import RecenlyAdded from "@/components/home/RecenlyAdded";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <HeroSection></HeroSection>
      <RecenlyAdded></RecenlyAdded>
      <FeaturedProducts></FeaturedProducts>
    </>
  );
}
