import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Numbers = ({number,text}) => {
  return (
    <Box>
        <Flex>
            <Box>
                <Text>{number}</Text>
                <Text>{text}</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Numbers