import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme, styled } from "@mui/material/styles";

const Faq = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:960px)");
  const lg = useMediaQuery("(max-width:1280px)");
  const theme = useTheme();
  const themes = theme.palette;
  // Define the list of FAQs
  const faqs = [
    {
      question: "What is realtoreth?",
      answer:
        "What is realtoreths a user-friendly website that allows you to search for available properties based on your preferences...",
    },
    {
      question: "How can I rent home in realtoreth?",
      answer:
        "Yes, HomeSearchNow is completely free for users. You can access all the features and functionalities without any charges...",
    },
    {
      question: "How can i pay for renting",
      answer:
        "HomeSearchNow is completely free for users. You can access all the features and functionalities without any charges...",
    },
    {
      question: "Do we reserve home online?",
      answer:
        "Yes, HomeSearchNow is completely free for users. You can access all the features and functionalities without any charges",
    },

    // Add more FAQs here...
  ];

  // Define state to keep track of expanded FAQs
  const [expanded, setExpanded] = useState(null);

  // Function to handle accordion expansion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        marginLeft: {
          lg: "20%",
          md: "20%",
          sm: "10%",
          xs: "5%",
        },
        marginRight: {
          lg: "20%",
          md: "20%",
          sm: "10%",
          xs: "5%",
        },
        mt: "15px",
      }}
    >
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleAccordionChange(index)}
          key={index}
          style={{
            backgroundColor: "#f5f5f5",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#333" }} />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
            style={{ backgroundColor: "white", borderRadius: "8px" }}
          >
            <Typography variant="h6" style={{ color: "#333" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#fafafa", color: themes.black.main }}
          >
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
