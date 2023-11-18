import { useState } from "react";
import { Modal, Box } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
const FullWidthModal = ({ images, open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ height: "100%" }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{ height: "100%", display: "flex", justifyContent: "center" }}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </Box>
          ))}
        </SwipeableViews>
      </Box>
    </Modal>
  );
};
export default FullWidthModal;
