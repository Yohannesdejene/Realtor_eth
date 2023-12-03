// import { useState, useEffect, useRef } from "react";
// import { Typography, IconButton, Box } from "@mui/material";
// import { useTheme, styled } from "@mui/material/styles";

// ///icons

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import { useDispatch, useSelector } from "react-redux";

// let ayat = ["home3.jpg", "home4.jpg", "home5.jpg", "newHome.png"];
// let imagess = ["1.jpg", "2.png", "4.jpg", "6.jpg"];

// const HomeCover = ({ realestate }) => {
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const themes = theme.palette;
//   const [imageIndex, setImageIndex] = useState(0);
//   const [images, setImages] = useState([]);
//   const [nextImage, setNextImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     setIsLoading(true);
//     setImages(imagess);
//     setIsLoading(false);
//   }, []);

//   // useEffect(() => {
//   //   const preloadedImages = [];
//   //   for (let i = 0; i < ayat.length; i++) {
//   //     const img = new Image();
//   //     img.src = `./Realestates/ayat${ayat[i]}`;
//   //     preloadedImages.push(img);
//   //   }
//   //   setImages(preloadedImages);
//   // }, []);

//   // useEffect(() => {
//   //   setIsLoading(true);
//   //   if (imageIndex + 1 < images.length) {
//   //     const img = new Image();
//   //     img.onload = () => {
//   //       setIsLoading(false);
//   //     };
//   //     img.src = `/Images/${images[imageIndex + 1]}`;
//   //     setNextImage(img);
//   //   }
//   // }, [imageIndex, images]);

//   const handlePrevImage = () => {
//     if (imageIndex > 0) {
//       // setIsLoading(true);
//       const img = new Image();
//       img.onload = () => {
//         // setIsLoading(false);
//       };
//       img.src = `/Images/${images[imageIndex - 1]}`;
//       setNextImage(img);
//       setImageIndex(imageIndex - 1);
//     } else {
//       // setIsLoading(false);
//     }
//   };

//   const handleNextImage = () => {
//     if (imageIndex + 1 < images.length) {
//       // setIsLoading(true);
//       const img = new Image();
//       img.onload = () => {
//         // setIsLoading(false);
//       };
//       img.src = `/Images/${images[imageIndex + 1]}`;
//       setNextImage(img);
//       setImageIndex(imageIndex + 1);
//     } else {
//       // setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextImage();
//     }, 3000); // Change the time interval here (in milliseconds)

//     return () => clearInterval(interval);
//   }, [imageIndex]);

//   return (
//     <>
//       <Box>
//         <Box
//           style={{
//             position: "relative",
//             width: "100%",
//             height: "100vh",
//             overflow: "hidden",
//             backgroundImage: `url('/Realestates/ayat/${images[imageIndex]}')`,
//             backgroundSize: "cover",

//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             height: "60dvh",
//             width: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//             transition: "background-image 0.5s ease-in-out",
//           }}
//         >
//           {" "}
//           {isLoading && (
//             <Box
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#ffffff",
//                 opacity: 0.8,
//               }}
//             >
//               <Typography variant="caption">Loading...</Typography>
//             </Box>
//           )}
//           <Typography
//             variant="h1"
//             sx={{
//               color: themes.white.main,

//               // fontSize: "3rem",
//               textAlign: "center",
//               fontWeight: 800,
//               [theme.breakpoints.down("sm")]: {
//                 fontSize: "20px",
//               },
//             }}
//           >
//             {imageIndex === 0 ? "" : imageIndex === 2}
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               position: "absolute",
//               width: "100%",
//             }}
//           >
//             <IconButton
//               onClick={handlePrevImage}
//               disabled={imageIndex === 0 ? true : false}
//               style={{
//                 left: "5px",
//                 backgroundColor: imageIndex === 0 ? "#f2f2f2" : "#ffffff",
//               }}
//             >
//               <ArrowBackIosNewIcon sx={{ color: "#000000" }} />
//             </IconButton>
//             <IconButton
//               onClick={handleNextImage}
//               disabled={imageIndex + 1 === images.length ? true : false}
//               style={{
//                 right: "5px",
//                 backgroundColor:
//                   imageIndex + 1 === images.length ? "#f2f2f2" : "#ffffff",

//                 // imageIndex + 1 === images.length ? "grey" : "",
//               }}
//             >
//               <ArrowForwardIosIcon
//                 disabled={imageIndex + 1 === images.length ? true : false}
//                 sx={{ color: "#000000" }}
//               />
//             </IconButton>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             mt: "20px",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {images.map((_, idx) => (
//             <IconButton
//               key={idx}
//               size="small"
//               onClick={() => setImageIndex(idx)}
//               style={{
//                 backgroundColor:
//                   imageIndex === idx ? themes.green.main : themes.grey.main,
//                 margin: "0px 5px",
//                 width: "10px",
//                 height: "10px",
//               }}
//             >
//               {/* <Typography variant="caption">{idx + 1}</Typography> */}
//             </IconButton>
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// };
// export default HomeCover;

import { useState, useEffect, useRef } from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const HomeCover = ({ realEstateName, images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [nextImage, setNextImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {images && (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url('/Realestates/${realEstateName}/${images[imageIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "60dvh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          {isLoading && (
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                opacity: 0.8,
              }}
            >
              <Typography variant="caption">Loading...</Typography>
            </Box>
          )}
          <Typography
            variant="h1"
            sx={{
              color: themes.white.main,
              textAlign: "center",
              fontWeight: 800,
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },
            }}
          >
            {imageIndex === 0 ? "" : imageIndex === 2}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              disabled={imageIndex === 0 ? true : false}
              style={{
                left: "5px",
                backgroundColor: imageIndex === 0 ? "#f2f2f2" : "#ffffff",
              }}
            >
              <ArrowBackIosNewIcon sx={{ color: "#000000" }} />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              disabled={imageIndex + 1 === images.length ? true : false}
              style={{
                right: "5px",
                backgroundColor:
                  imageIndex + 1 === images.length ? "#f2f2f2" : "#ffffff",
              }}
            >
              <ArrowForwardIosIcon
                disabled={imageIndex + 1 === images.length ? true : false}
                sx={{ color: "#000000" }}
              />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomeCover;
