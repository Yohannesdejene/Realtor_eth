import { Box, Typography, useTheme } from "@mui/material";

const Guide = () => {
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Box
      sx={{
        mt: "80px",
        display: "flex",
        flexDirection: "column",
        ml: "10%",
        mr: "10%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4">User guide</Typography>

        <Typography variant="h4" sx={{ mt: "20px" }}>
          Rental guide
        </Typography>
        <a href="#rent"></a>
        <section id="rent">
          <Typography variant="h6" sx={{ mt: "20px", mb: "30px" }}>
            Welcome to our rental guide! We understand that finding the right
            rental property can be a daunting task, but we're here to help make
            the process as smooth as possible. First, it's important to
            determine your budget and what you're looking for in a rental
            property. Are you looking for a studio apartment, a one-bedroom, or
            something larger? Do you need a parking spot or outdoor space? Once
            you have a clear idea of what you're looking for, you can start your
            search. Our website has a wide range of rental properties available,
            from cozy apartments to spacious houses. You can filter your search
            by location, price, and property type to find the perfect match for
            your needs. Once you find a property that interests you, be sure to
            schedule a viewing. This will give you the opportunity to see the
            property in person and ask any questions you may have. Our team is
            always available to answer any questions you may have about the
            property or the rental process. When you're ready to submit an
            application, be sure to have all necessary documents ready,
            including proof of income and references. Our team will review your
            application and let you know if you've been approved.
          </Typography>
        </section>
        <a href="#sale"></a>
        <Typography variant="h4" sx={{ mt: "20px" }}>
          Sale guide
        </Typography>

        <section id="sale">
          <Typography variant="h6" sx={{ mt: "20px" }}>
            Welcome to our "For Sale" section! Whether you're a first-time
            homebuyer or an experienced investor, we're here to help you find
            your dream home. Browse through our extensive selection of
            properties for sale, ranging from cozy condos to luxurious estates.
            You can filter your search by location, price range, number of
            bedrooms, and more, to narrow down your options and find the perfect
            fit for your needs. If you can't find exactly what you're looking
            for among our current listings, don't worry! We also offer a
            personalized home request service. Simply provide us with details
            about the type of home you're looking for, such as location, size,
            specific features, and any other preferences you have. Our team of
            experienced real estate professionals will actively search for
            properties that match your criteria and notify you as soon as a
            potential match becomes available. We understand that buying a home
            is a significant decision, and we're here to guide you through the
            entire process. Our team can provide valuable insights, answer any
            questions you may have, and assist with arranging property viewings
            and negotiations. Whether you're a first-time buyer or an
            experienced investor, we're dedicated to helping you find the
            perfect property that meets your needs and exceeds your
            expectations. Start your search today or submit a personalized home
            request, and let us help you make your homeownership dreams a
            reality.
          </Typography>
        </section>
        <a href="#firsttimer"></a>
        <Typography variant="h4" sx={{ mt: "20px" }}>
          First Timer
        </Typography>

        <section id="firsttimer">
          <Typography variant="h6" sx={{ mt: "20px" }}>
            Welcome to our website! We're excited to have you here and help you
            navigate through our platform. Whether you're a first-time visitor
            or a returning user, this guide will provide you with all the
            information you need to make the most of your experience. Explore
            Our Listings: Take some time to browse through our wide range of
            listings. We have a diverse selection of properties available,
            including rentals and properties for sale. Use our search filters to
            narrow down your options based on location, price range, property
            type, and more. Save Favorites: Found a property that caught your
            eye? Make sure to save it as a favorite! By doing so, you can easily
            access and compare your favorite listings later on. Simply click the
            "Save" or "Favorite" button on the property details page to add it
            to your list. Request More Information: If you have any questions
            about a specific property or need more information, don't hesitate
            to reach out to us. You can find the contact details on the property
            details page. Our team is here to assist you and provide any
            additional details you may need. Submit Applications: Ready to take
            the next step and apply for a rental property? Look for the "Apply
            Now" button on the property details page. Follow the instructions
            and provide the necessary documents, such as proof of income and
            references. Our team will review your application and get back to
            you as soon as possible. Stay Updated: Don't miss out on new
            listings and updates! Sign up for our newsletter or follow us on
            social media to stay informed about the latest properties available,
            market trends, and helpful tips for homebuyers and renters. Get in
            Touch: We value your feedback and are here to assist you with any
            questions or concerns you may have. If you need assistance
            navigating our website or have suggestions for improvement, please
            don't hesitate to reach out to our support team. We're here to
            ensure that your experience with us is smooth and enjoyable.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};
export default Guide;
