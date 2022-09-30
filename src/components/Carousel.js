import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import "../styles/Carousel.css";

function CarouselFade({ images }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((item) => {
          return (
            <motion.div className="item">
              <img src={item} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default CarouselFade;
