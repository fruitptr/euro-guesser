import React from 'react'
import { Input, InputGroup, Box, Button, Icon, InputRightElement, InputLeftElement, Center } from '@chakra-ui/react'
import { TbFlag2 } from "react-icons/tb";

const CountryInput = () => {
  return (
    <Center>
        <Box display="flex" position="absolute" top="60%" bg="white" py={1} px={1} borderRadius='full' width='40%' boxShadow='base'>
            <InputGroup focusBorderColor="transparent" focusBoxShadow="none">
                <InputLeftElement pointerEvents='none'>
                    <Icon as={TbFlag2} color='gray.300' />
                </InputLeftElement>
                <Input borderRadius='full' focusBorderColor="transparent" placeholder='Guess the country' fontFamily='"cg",Courier,system-ui,sans-serif' />
                <InputRightElement width='4.5rem'>
                    <Button borderRadius='full' colorScheme='brand' fontFamily='"cg",Courier,system-ui,sans-serif'>Guess</Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    </Center>
  )
}

export default CountryInput
