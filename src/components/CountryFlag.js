import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Progress, useToast} from '@chakra-ui/react';
import axios from 'axios';

const CountryFlag = ({ countryFlag, setSkipFlag, setGameEnded, userScore, totalCountries, countryToGuess }) => {
  const [timer, setTimer] = useState(180);
  const toast = useToast()

  const handleSkip = () => {
    setSkipFlag(true);
  };

  if (timer === 0) {
    setGameEnded(true);
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);

  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const formatScore = () => {
    if (userScore < 10) {
      return `0${userScore}/${totalCountries}`;
    }
    else {
      return `${userScore}/${totalCountries}`;
    }
  }

  const handleHint = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v2/name/${countryToGuess}?fullText=true`);
      const capital = response.data[0].capital;

      toast({
        title: 'Hint:',
        description: `The country's capital is ${capital}`,
        position: 'top',
        variant: 'subtle',
        duration: 10000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Whoops!',
        description: 'Cannot fetch hint at the moment. Please try again later.',
        position: 'top',
        variant: 'subtle',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <Box
      display='flex'
      position="absolute"
      top="5%"
      justifyContent="space-between"
      width="100%"
      paddingX="50px"
    >
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Heading as='h4' size='md' fontFamily='"cg",Courier,system-ui,sans-serif'>
          Time Remaining
        </Heading>
        <Heading as='h1' size='4xl' noOfLines={1} fontFamily='"cg",Courier,system-ui,sans-serif'>
          {formatTime(timer)}
        </Heading>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button width='100%' paddingX={7} borderRadius='full' colorScheme='yellow' border='2px solid #FFFFFF' fontFamily='"cg",Courier,system-ui,sans-serif' margin={4} onClick={handleHint}>Hint</Button>
        <img id='flag' src={countryFlag} alt="Country Flag"></img>
        <Button width='100%' paddingX={7} borderRadius='full' colorScheme='red' border='2px solid #FFFFFF' color="#FFFFFF" fontFamily='"cg",Courier,system-ui,sans-serif' margin={4} onClick={handleSkip}>Skip</Button>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Heading as='h4' size='md' fontFamily='"cg",Courier,system-ui,sans-serif'>
          Score
        </Heading>
        <Heading as='h1' size='4xl' noOfLines={1} fontFamily='"cg",Courier,system-ui,sans-serif'>
          {formatScore()}
        </Heading>
        <Progress value={userScore} max={totalCountries} width='100%' colorScheme='green' borderRadius='full' marginTop={4} />
      </Box>
    </Box>
  );
}

export default CountryFlag;
