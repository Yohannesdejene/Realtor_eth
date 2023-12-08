import React from "react";
import { Typography } from "@mui/material";

const SliderComponent = ({ images }) => {
  const [sliderIndex, setSliderIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Automatically change the slider image after a set interval
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setSliderIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setSliderIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "70vh",
        overflow: "hidden",
        // height: "70vh", // Adjust the height as per your requirements
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[sliderIndex].url}
        alt={images[sliderIndex].title}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === sliderIndex ? "#000" : "#ccc",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setSliderIndex(index)}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // backgroundColor: "rgba(0,0,0,0.5)",
          padding: "16px",
          borderRadius: "8px",
          color: "#fff",
          textAlign: "center",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bold",
            fontWeight: 900,
          }}
        >
          {/* {images[sliderIndex].title} */}
        </h2>
        <Typography
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bold",
            fontWeight: 900,
          }}
        >
          {images[sliderIndex].description}
        </Typography>
        {/* <p>{images[sliderIndex].description}</p> */}
      </div>

      {isHovered && (
        <>
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "#ffffff",
              border: "none",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "#ffffff",
              border: "none",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handleNextClick}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default SliderComponent;
