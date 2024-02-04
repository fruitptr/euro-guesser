import React from 'react'
import { Button, Box, Heading, ScaleFade } from '@chakra-ui/react';
import countries from '../assets/countries';

const GameEnded = ({setGameEnded, setCorrectCountriesGuessed, setRemainingCountries, userScore}) => {
    const handleGameEnded = () => {
        setRemainingCountries(Object.keys(countries));
        setCorrectCountriesGuessed([]);
        setGameEnded(false);
    };
  return (
    <ScaleFade initialScale={0.9} in={true}>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100vh' bg='#e8f1e7'>
            <Box bg='#94AD99' borderRadius='full' height='15rem' width='15rem' border='5px solid white'>
                <Box display='flex' flexDirection='column' alignItems='center' height='15rem' justifyContent='center'>
                    <Heading as='h2' size='2xl' marginBottom='0.5rem' color='white' fontFamily='"cg",Courier,system-ui,sans-serif'>
                        Score
                    </Heading>
                    <Heading as='h2' size='xl' marginBottom='1rem' color='white' fontFamily='"cg",Courier,system-ui,sans-serif'>
                        24/45
                    </Heading>
                </Box>
            </Box>
            <Box>
                <Heading as='h1' size='4xl' noOfLines={1} marginBottom='1rem'>
                    An impressive effort!
                </Heading>
                <Box display='flex' justifyContent='center' flexDirection='row'>
                    <Heading as='h2' size='xl'>
                        Wanna try again?
                    </Heading>
                    <Button bgColor='#94AD99' colorScheme='green' marginLeft='1rem' onClick={handleGameEnded}>Play Again</Button>
                </Box>
            </Box>
        </Box>
    </ScaleFade>
  )
}

export default GameEnded