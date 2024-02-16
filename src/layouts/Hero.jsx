import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Numbers from "../components/Numbers";
import { ArrowRight } from "iconsax-react";

const Hero = () => {
  return (
    <Box id="Home">
      <Flex justifyContent={"center"} alignItems={"center"} pt={"120px"}>
        <Box textAlign={"center"}>
          <Box px={{lg : 0, md : 0, sm : 10, base : 5}} width={{lg : "50vw", md: "50vw", sm : "100vw", base : "100vw"}}>
            <Heading fontFamily={"Lato"} fontWeight={500} fontSize={{lg : 60, md : 50, sm : 50, base: "35px"}}>
              We're Dedicated to Making You Look and Feel your Best
            </Heading>
            <Text fontSize={15}>
              Beat the wait and reserve a hairatall session today with the best
              stylists in New York
            </Text>
            <Button
              bg={"#E1B8B0"}
              my={3}
              color={"#2A283C"}
              rightIcon={<ArrowRight size={15} />}
              borderRadius={12}
              width={"150px"}
              _hover={"none"}
              py={6}
            >
              Book Now
            </Button>
            <Flex>
              <Numbers number={""} text={""} />
              <Numbers number={""} text={""} />
              <Numbers number={""} text={""} />
            </Flex>
          </Box>
          <Flex my={10} justifyContent={'center'}>
            <Image
              src="https://img.freepik.com/free-photo/front-view-bride-getting-ready_23-2149860785.jpg?w=360&t=st=1708107996~exp=1708108596~hmac=d747d7232c1deaee278a7c0598a57a526ef80b043a585db4a12ec85a89a5d976"
              width={{lg : 400, md : 400, sm : 300, base : 300}}
              boxShadow={"-5px 5px 0px #2A283C"}
              height={{lg : 500, md : 400, sm : 300, base : 300}}
              objectFit={"cover"}
              borderTopRadius={4000}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
