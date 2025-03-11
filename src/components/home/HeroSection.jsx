import React from "react";
import Slider from "./Slider";
import styles from "@/styles/home/hero.module.css"
import Container from "../Container";
function HeroSection() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>
            One stop solution <span className="text-pink-500">MYSTORE</span>
          </h1>
          <p>Discover the latest Headphones,Earphones,mobiles,tablets etc</p>
          <p>Exclusive deals just for you!!</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
        <Slider></Slider>
      </section>

      {/* IMage Slider */}
      
    </Container>
  );
}

export default HeroSection;


