import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Box id="Contact" pb={20}>
      <Heading textAlign={"center"} fontSize={60} pb={10}>
        Connect with Us
      </Heading>
      <Flex flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} justifyContent={"center"} gap={10} alignItems={"center"}>
        <Box width={500} borderRadius={10} height={550} bg={"#ddd"}></Box>
        <Box boxShadow={"0px 0px 10px #eee"} p={10} borderRadius={10}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" width={400} placeholder="John Doe" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" width={400} placeholder="+234" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" width={400} placeholder="johndoe@gmail.com" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Type Here...." />
          </FormControl>
          <Button
            mt={5}
            width={"100%"}
            bg={"#E1B8B0"}
            color={"#2A283C"}
            py={7}
            borderRadius={40}
            _hover={"none"}
          >
            Send
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;