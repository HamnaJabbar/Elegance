import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

import img1 from "../../public/img1.webp";
import img2 from "../../public/img2.webp";
import img3 from "../../public/img3.webp";
import img4 from "../../public/img4.webp";

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4); 
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      selectedItem={activeSlide} // Set the active slide based on state
      onChange={(index) => setActiveSlide(index)} // Update active slide on manual change
    >
      <div>
        <Image src={img1} alt="Image 1" width={1200} height={800} layout="responsive" />
      </div>
      <div>
        <Image src={img2} alt="Image 2" width={1200} height={800} layout="responsive" />
      </div>
      <div>
        <Image src={img3} alt="Image 3" width={1200} height={800} layout="responsive" />
      </div>
      <div>
        <Image src={img4} alt="Image 4" width={1200} height={800} layout="responsive" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
