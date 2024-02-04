import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';


const CountryFlag = ({countryFlag}) => {

  return (
    <Box
      display='flex'
      position="absolute"
      top="5%"
      justifyContent="space-between"
      width="100%"
      paddingX="50px"
    >
      <Box>
        <Heading as='h1' size='4xl' noOfLines={1}>
          00:00
        </Heading>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button width='100%' paddingX={7} borderRadius='full' bgColor='#FFD567' fontFamily='"cg",Courier,system-ui,sans-serif' margin={4}>Hint</Button>
        <img id='flag' src={countryFlag} alt="Country Flag"></img>
        <Button width='100%' paddingX={7} borderRadius='full' bgColor='#94AD99' color="#FFFFFF" fontFamily='"cg",Courier,system-ui,sans-serif' margin={4}>Skip</Button>
      </Box>
      <Box>
        <Heading as='h1' size='4xl' noOfLines={1}>
          1/45
        </Heading>
      </Box>
    </Box>
  );
}

export default CountryFlag;
