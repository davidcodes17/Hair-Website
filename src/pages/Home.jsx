import { Box, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Services from "../layouts/Services";
import ContactUs from "../layouts/ContactUs";
import Footer from "../layouts/Footer";
import { ArrowUp, ArrowUp2, ArrowUp3 } from "iconsax-react";

const Home = () => {
  return (
    <Box pos={"relative"}>
      <Header />
      <Hero />
      <Services />
      <ContactUs />
      <Footer />
      <IconButton
        bg={"#E1B8B0"}
        icon={<ArrowUp3 variant="Bold" color="#2A283C" size={40} />}
        as={Link}
        href="#Home"
        borderRadius={40}
        pos={"fixed"}
        bottom={30}
        right={100}
        _hover={"none"}
        boxShadow={"0px 0px 100px #000"}
      />
    </Box>
  );
};

export default Home;
