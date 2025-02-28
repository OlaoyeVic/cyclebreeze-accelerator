import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pexel1 from "../assets/pexel1.svg";
import pexel2 from "../assets/pexel2.svg";
import pexel3 from "../assets/pexel3.svg";

interface ImageSlide {
  src: string;
  alt: string;
  caption?: string;
}

const imageSlides: ImageSlide[] = [
  { src: pexel1, alt: "Image 1", caption: "Beautiful Landscape" },
  { src: pexel2, alt: "Image 2", caption: "Modern Architecture" },
  { src: pexel3, alt: "Image 3", caption: "Vibrant City" },
  // Add more images here
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlides.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="relative h-[489px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={imageSlides[currentIndex].src}
            alt={imageSlides[currentIndex].alt}
            className="object-cover w-full h-full"
          />
          {/* {imageSlides[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
              <p className="text-lg">{imageSlides[currentIndex].caption}</p>
            </div>
          )} */}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ImageSlider;
