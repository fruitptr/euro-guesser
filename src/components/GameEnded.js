import React from 'react'
import { Button } from '@chakra-ui/react';
import countries from '../assets/countries';

const GameEnded = ({setGameEnded, setCorrectCountriesGuessed, setRemainingCountries}) => {
    const handleGameEnded = () => {
        setRemainingCountries(Object.keys(countries));
        setCorrectCountriesGuessed([]);
        setGameEnded(false);
    };
  return (
    <>
        <Button onClick={handleGameEnded}>Play Again</Button>
    </>
  )
}

export default GameEnded