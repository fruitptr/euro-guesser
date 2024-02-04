import React from 'react'
import { Input, InputGroup, Box, Button, Icon, InputRightElement, InputLeftElement, Center, useToast } from '@chakra-ui/react'
import { TbFlag2 } from "react-icons/tb";

const CountryInput = ({countryToGuess, setCorrectCountriesGussed}) => {
    const toast = useToast()
    const handleGuess = () => {
        const input = document.getElementById('user-input')
        const guessSoFar = input.value
        if (guessSoFar.toLowerCase() === countryToGuess.toLowerCase()) {
            input.value = ''
            setCorrectCountriesGussed((prev) => [...prev, countryToGuess])
            toast.closeAll()
            return toast({
                title: "Correct!",
                description: `You guessed ${countryToGuess} correctly!`,
                status: "success",
                duration: 3000,
                isClosable: false,
            })
        }
        else {
            input.value = ''
            toast.closeAll()
            return toast({
                title: "Incorrect!",
                status: "error",
                duration: 3000,
                isClosable: false,
            })
        }
    }

    const handleGuessInput = (event) => {
        if (event.key === "Enter") {
            handleGuess()
        }
    }

  return (
    <Center>
        <Box display="flex" position="absolute" top="58%" bg="white" py={1} px={1} borderRadius='full' width='40%' boxShadow='base'>
            <InputGroup focusBorderColor="transparent" focusBoxShadow="none">
                <InputLeftElement pointerEvents='none'>
                    <Icon as={TbFlag2} color='gray.300' />
                </InputLeftElement>
                <Input id='user-input' borderRadius='full' focusBorderColor="transparent" placeholder='Guess the country' fontFamily='"cg",Courier,system-ui,sans-serif' onKeyDown={handleGuessInput}/>
                <InputRightElement width='4.5rem'>
                    <Button borderRadius='full' colorScheme='brand' fontFamily='"cg",Courier,system-ui,sans-serif' onClick={handleGuess}>Guess</Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    </Center>
  )
}

export default CountryInput
