import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = ({ width, height }) => {
  return (
    <Box>
      <Image
        src="/logo (2).png"
        width={width}
        height={height}
        objectFit={"cover"}
        borderRadius={40}
      />
    </Box>
  );
};

export default Logo;
