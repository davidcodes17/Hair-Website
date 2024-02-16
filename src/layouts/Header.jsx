import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { ArrowRight, HambergerMenu } from "iconsax-react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box pos={"fixed"} top={0} left={0} right={0} bg={"#fff"} zIndex={99}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        py={4}
        px={4}
        boxShadow={"0px 0px 10px #eee"}
      >
        <Logo width={"100px"} height={"50px"} />
        <Flex
          justifyContent={"center"}
          gap={10}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
          <Nav text={"Home"} />
          <Nav text={"Salon"} />
          <Nav text={"Services"} />
          <Nav text={"Contact"} />
        </Flex>
        <Button
          fontSize={12}
          bg={"#E1B8B0"}
          color={"#2A283C"}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          height={9}
          rightIcon={<ArrowRight size={15} />}
          borderRadius={12}
        >
          Book Now
        </Button>
        <Box
          ref={btnRef}
          onClick={onOpen}
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
        >
          <HambergerMenu size={40} />
        </Box>
        <>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                px={5}
              >
                <Logo width={100} height={100} />
                <CloseButton onClick={onClose} />
              </Flex>
              <Box px={10} lineHeight={10} py={5}>
                <Link href="#Home" display={"block"}>
                  Home
                </Link>
                <Link href="#Salon" display={"block"}>
                  Salon
                </Link>
                <Link href="#Services" display={"block"}>
                  Services
                </Link>
                <Link href="#Contact" display={"block"}>
                  Contact
                </Link>
                <Button
                  fontSize={12}
                  bg={"#E1B8B0"}
                  color={"#2A283C"}
                  display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
                  height={9}
                  rightIcon={<ArrowRight size={15} />}
                  borderRadius={12}
                >
                  Book Now
                </Button>
              </Box>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};

export default Header;
