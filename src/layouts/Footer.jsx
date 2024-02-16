import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Call, Location, Sms } from "iconsax-react";

const Footer = () => {
  return (
    <Box id="Salon" bg={"#E1B8B0"} p={20} borderTopRadius={40}>
      <Flex justifyContent={{lg : "space-between", md : "space-between", sm : "center", base : "center"}} flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}}>
        <Logo/>
        <Box width={500} pt={{lg : 0, md : 0, sm : 10, base : 10}}>
          <Box alignItems={'center'} py={4} fontSize={20}>
            <Location size={50} variant="Bold" />
            <Text>
              Best hairdresser in Brisbane. Located in the heart of Paddington,
              70 Charlotte St, Paddington, 4064
            </Text>
          </Box>
          <Box py={4} alignItems={'center'} fontSize={20}>
            <Call size={50} variant="Bold" />
            <Text>07 3061 5723</Text>
          </Box>
          <Box py={4} alignItems={'center'} fontSize={20}>
            <Sms size={50} variant="Bold" />
            <Text>hello@littlehairnest.com.au</Text>
          </Box>
          <Text fontSize={20}>Open Hours</Text>
          <Text>
            Mon 09:00 AM - 05:00 PM Tue - Wed - Thur 09:00 AM - 08:00 PM Fri
            09:00 AM - 05:00 PM
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
