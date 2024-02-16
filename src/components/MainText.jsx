import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const MainText = (props) => {
  return (
    <Flex
      alignItems={"center"}
      gap={10}
      justifyContent={"space-between"}
      py={3}
      fontSize={20}
    >
      <Text fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}>
        <li>{props.text}</li>
      </Text>
      <Text fontWeight={600} fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}>
        {props.number}
      </Text>
    </Flex>
  );
};

export default MainText;
