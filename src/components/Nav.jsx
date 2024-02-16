import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Nav = ({ text }) => {
  const [width, setWidth] = useState(1);
  return (
    <Box
    as={Link}
    href={"#"+text}
      onMouseOver={(e) => {
        setWidth(8);
      }}
      onMouseOut={(e) => {
        setWidth(1);
      }}
    >
      <Text color={"#2A283C"}>{text}</Text>
      <Flex justifyContent={"center"}>
        <Box width={width} as={motion.div} transition={"all .4s"} borderRadius={40} height={1} bg={"#2A283C"}></Box>
      </Flex>
    </Box>
  );
};

export default Nav;
