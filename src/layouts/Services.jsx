import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import MainText from "../components/MainText";

const Services = () => {
  return (
    <Box
      id="Services"
      p={{ lg: 100, md: 80, sm: 50, base: 50 }}
      mt={50}
      width={"100vw"}
    >
      <Flex gap={40} justifyContent={"space-between"}>
        <Box>
          <Heading fontSize={{ lg: 60, md: 50, sm: 40, base: "30px" }}>
            Our Services
          </Heading>
          <Box py={5} width={{ lg: 400, md: 400, sm: "100%", base: "100%" }}>
            <Text fontSize={{ lg: 40, md: "30px", sm: 25, base: 20 }}>
              SENIOR STYLIST{" "}
            </Text>
            <MainText text="Foils 1/4 head" number={"155"} />
            <MainText text="Foils 1/2 head" number={"200"} />
            <MainText text="Foils 3/4 head" number={"225"} />
            <MainText text="Foils Full head " number={"240"} />
            <MainText text="Colour Retouch  " number={"120"} />
            <MainText text="Colour Short" number={"140"} />
            <MainText text="Colour Medium" number={"155"} />
            <MainText text="Colour Long from" number={"180"} />
            <MainText text="Bespoke short" number={"160"} />
            <MainText text="Bespoke medium" number={"185"} />
            <MainText text="Bespoke long" number={" 215"} />
            <MainText text="Balayage partial from" number={"160"} />
            <MainText text="Balayage maintain from" number={"200"} />
            <MainText text="Balayage full head from" number={"260"} />
            <Box py={5}>
              <Text fontSize={{ lg: 40, md: "30px", sm: 25, base: 20 }}>
                Cutting{" "}
              </Text>
              <MainText text="Stylecut & blowdry" number={"120"} />
              <MainText text="Stylecut & blowdrylong from" number={"140"} />
              <MainText text="Curly Cut natural dry" number={"99"} />
            </Box>
            <Box py={5}>
              <Text fontSize={{ lg: 40, md: "30px", sm: 25, base: 20 }}>
                Treatment Rituals{" "}
              </Text>
              <MainText
                text="Treat you hair with a moisturizing hair ritual and unwind with a scalp massage"
                number={"26"}
              />
              <MainText
                text="Scalp Spa Facial 
scalp exfoliation, head massage, 
hair treatment, hot towel service 
& blowdry style to finish "
                number={"99"}
              />
              <Box py={5}>
                <Text fontSize={{ lg: 40, md: "30px", sm: 25, base: 20 }}>
                  Targeted result driven treatments{" "}
                </Text>
                <MainText
                  text="On protect- 
colour additive bond protection"
                  number={"15"}
                />
                <MainText
                  text="K18- 
pre and post colour service or
stand alone treatment to protect
and restore hair integrity"
                  number={"35"}
                />
                <Box py={5}>
                  <Text fontSize={{ lg: 40, md: "30px", sm: 25, base: 20 }}>
                    Styling
                  </Text>
                  <MainText text="Blowdry Short" number={"55"} />
                  <MainText text="Blowdry Medium" number={"65"} />
                  <MainText text="Blowdry Long" number={"75"} />
                  <MainText text="Dry Styling" number={"from 50"} />
                  <MainText text="Event styling" number={"POA"} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Grid
          gap={10}
          gridTemplateColumns={{
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          display={{ lg: "grid", md: "grid", sm: "none", base: "none" }}
        >
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/9e05dcd105c1e9c9c93a5a00412a9f61/little-hair-nest-low-res-247.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/6036f01b99e28652849acc6c31ec5ea1/little-hair-nest-low-res-144.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/1889a8cfe7fe0ce610842fca30b8cd2f/little-hair-nest-low-res-326.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/d4bfc528fab1f8deaedf85644b01305c/little-hair-nest-low-res-237.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/d13925d041dcc1d45a690042359c3e5f/little-hair-nest-low-res-322.jpg"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://littlehairnest.com.au/__static/d10e42ad6233b535cf2d208c2af27d52/little-hair-nest-low-res-18.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/563c3f0c14e6c12ec01eb3fcffa03dcc/little-hair-nest-low-res-280.jpg"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://littlehairnest.com.au/__static/44a2e0ba103d17d1253a7c7bef50cc58/little-hair-nest-low-res-161.jpg"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://img.freepik.com/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286051.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://img.freepik.com/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286073.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://img.freepik.com/premium-photo/female-client-washes-hair-salon-professional-hairdresser-washes-head-female-client-with-water-shampoo-treatment-hairstyle-beauty-hair-care-fashion-service_357889-5388.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
          <Image
            borderRadius={20}
            width={300}
            height={300}
            objectFit={"cover"}
            src="https://img.freepik.com/premium-photo/customer-getting-hairdo-beauty-salon_53876-137846.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
        </Grid>
      </Flex>
      <Box>
        <Flex
          alignItems={"baseline"}
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          gap={2}
        >
          <Text
            fontSize={{ lg: "30px", md: 20, sm: 20, base: 20 }}
            fontWeight={800}
          >
            Smoothing service :{" "}
          </Text>
          <Text fontSize={20}>
            POA please book in for an obligation free consultation and quote{" "}
          </Text>
        </Flex>
        <Text fontSize={20}>
          Express smoothing service (Softens hair, eliminates frizz, controls
          volume)
        </Text>
        <Text fontSize={20}>
          Excellence smoothing service (straightens hair, giving it an extremely
          natural look and soft texture)
        </Text>
        <Flex alignItems={"center"} flexWrap={"wrap"}>
          <Text
            fontSize={{ lg: "30px", md: 20, sm: 20, base: 20 }}
            fontWeight={800}
          >
            EMERGING STYLIST -
          </Text>
          <Text fontSize={20}>
            our talented team is always growing. Our emerging stylists are
            provided with leading industry and in salon training and will always
            be fully qualified at all services they are performing in salon.
            Please specify upon booking if you would like to see one of our
            emerging stylists at your next visit.
          </Text>
        </Flex>
      </Box>
      <Flex
        py={100}
        gap={40}
        justifyContent={"space-between"}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
      >
        <Box>
          <Box py={5} width={{ lg: 400, md: 400, sm: 400, base: "100%" }}>
            <Text fontSize={40}>Colour </Text>
            <MainText text="Foils 1/4 head" number={"145"} />
            <MainText text="Foils 1/2 head" number={"180"} />
            <MainText text="Foils 3/4 head" number={"205"} />
            <MainText text="Foils Full head " number={"220"} />
            <MainText text="Colour Retouch  " number={"120"} />
            <MainText text="Colour Short" number={"140"} />
            <MainText text="Colour Medium" number={"155"} />
            <MainText text="Colour Long from" number={"180"} />
            <MainText text="Bespoke short" number={"160"} />
            <MainText text="Bespoke medium" number={"185"} />
            <MainText text="Bespoke long" number={" 215"} />
            <MainText text="Balayage partial from" number={"140"} />
            <MainText text="Balayage maintain from" number={"180"} />
            <MainText text="Balayage full head from" number={"240"} />
            <Box py={5}>
              <Text fontSize={40}>Cutting </Text>
              <MainText text="Stylecut & blowdry" number={"105"} />
              <MainText text="Stylecut & blowdry long from" number={"115"} />
            </Box>
          </Box>
        </Box>
        <Grid
          gap={10}
          gridTemplateColumns={{
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          justifyContent={"center"}
        >
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/6036f01b99e28652849acc6c31ec5ea1/little-hair-nest-low-res-144.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/1889a8cfe7fe0ce610842fca30b8cd2f/little-hair-nest-low-res-326.jpg"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://img.freepik.com/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286051.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
          <Image
            width={300}
            height={300}
            objectFit={"cover"}
            borderRadius={20}
            src="https://img.freepik.com/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286073.jpg?size=626&ext=jpg&uid=R92807822&ga=GA1.1.1556962088.1707748675&semt=ais"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/6036f01b99e28652849acc6c31ec5ea1/little-hair-nest-low-res-144.jpg"
          />
          <Image
            width={300}
            height={300}
            borderRadius={20}
            objectFit={"cover"}
            src="https://littlehairnest.com.au/__static/1889a8cfe7fe0ce610842fca30b8cd2f/little-hair-nest-low-res-326.jpg"
          />
        </Grid>
      </Flex>
    </Box>
  );
};

export default Services;
