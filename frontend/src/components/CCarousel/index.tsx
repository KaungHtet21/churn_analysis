import { Carousel, Image } from "antd";
import dummyCarousel from "../../data/dummyCarousel";
import Styles from "./styles";
import { useEffect, useState } from "react";

const CCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDescription, setShowDescription] = useState(true);

  const onChange = (current:any) => {
    setCurrentIndex(current)
    setShowDescription(false)
  }

  useEffect(() => {
    // Show the description after a delay when the index changes
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 300); // Match this delay with the animation delay

    return () => clearTimeout(timer); 
  }, [currentIndex]);

  return (
    <div style={{position: 'relative'}}>
      <Carousel
        autoplay
        arrows
        afterChange={onChange}
        style={{
          width: "100vw",
          height: "90vh",
        }}
      >
        {dummyCarousel?.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <Image
              preview={false}
              src={item?.imageSrc}
              width={"100vw"}
              height={"90vh"}
              style={{ objectFit: "cover" }}
              alt="Random image"
            />
          </div>
        ))}
      </Carousel>
      {dummyCarousel?.length > 0 && (
        <Styles.ContentOverlay key={currentIndex}>
          <Styles.OverlayHeading>{dummyCarousel[currentIndex]?.title}</Styles.OverlayHeading>
          {showDescription && (
            <Styles.OverlayDescription>
              {dummyCarousel[currentIndex]?.description}
            </Styles.OverlayDescription>
          )}
        </Styles.ContentOverlay>
      )}
    </div>
  );
};

export default CCarousel;
