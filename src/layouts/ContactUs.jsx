import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Box id="Contact" pb={20}>
      <Heading textAlign={"center"} fontSize={{lg : 60, md : 50, sm : 40, base : 25}} pb={10}>
        Connect with Us
      </Heading>
      <Flex flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} px={{lg : 0, md : 0, sm : 5, base : 5}} justifyContent={"center"} gap={10} alignItems={"center"}>
        <Box width={{lg : 500,md: 400, sm : "100%", base : "100%"}} borderRadius={10} height={{lg : 550, md: 400, sm : 300, base : 300}} bgImage={"url('/map.png')"}></Box>
        <Box boxShadow={"0px 0px 10px #eee"} p={10} width={{lg : 500, md : 400, sm : "100%", base : "100%"}} borderRadius={10}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" width={"100%"} placeholder="John Doe" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" width={"100%"} placeholder="+234" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" width={"100%"} placeholder="johndoe@gmail.com" />
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
