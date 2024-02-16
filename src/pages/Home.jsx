import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Services from '../layouts/Services'
import ContactUs from '../layouts/ContactUs'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <ContactUs />
      <Footer />
    </Box>
  )
}

export default Home