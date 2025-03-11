"use client";
import styles from "@/styles/home/hero.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

// my client component
import React from "react";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",

  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",

  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",

  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",

  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",

  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 
        setCurrentSlide((currentValue)=>{
          if (currentValue == images.length - 1) {
              return 0;
            } else {
              return currentValue+1;
            }

        });
      
    }, 3000);

    // Cleanup code ---donw hile unmounting so that the interval doesn't run in background..........helps in optimisation
    return()=>{
      clearInterval(interval);
    }

  },[]);

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => {
          return (
            <Image
              alt={`Slide` + index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
              src={image}
              key={"Slide" + index}
              fill
            ></Image>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
