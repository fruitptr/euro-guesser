import * as React from 'react'
import { Box, ScaleFade } from '@chakra-ui/react'
import "../App.css"
import Map from './Map'
import CountryInput from './CountryInput'
import CountryFlag from './CountryFlag'
import countries from '.././assets/countries'
import GameEnded from './GameEnded'

function Game() {
  let randomCountryCode = '';
  let countryToGuess = '';
  let countryFlag = '';
  const [gameEnded, setGameEnded] = React.useState(false);
  const [remainingCountries, setRemainingCountries] = React.useState(Object.keys(countries));
  const [correctCountriesGuessed, setCorrectCountriesGuessed] = React.useState([]);
  const [skipFlag, setSkipFlag] = React.useState(false);
  const [userScore, setUserScore] = React.useState(0);
  

  const handleNextFlag = (skipFlag) => {
    if (skipFlag === false) {
      randomCountryCode = remainingCountries[Math.floor(Math.random() * remainingCountries.length)].toLowerCase();
      countryToGuess = countries[randomCountryCode.toUpperCase()];
      countryFlag = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${randomCountryCode}.svg`;
    }
    else {
      let remainingWithoutCurrent = remainingCountries.filter((country) => country !== randomCountryCode.toUpperCase());
      randomCountryCode = remainingWithoutCurrent[Math.floor(Math.random() * remainingWithoutCurrent.length)].toLowerCase();
      countryToGuess = countries[randomCountryCode.toUpperCase()];
      countryFlag = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${randomCountryCode}.svg`;
      setSkipFlag(false);
    }
  }
  
  if (remainingCountries.length !== 0 && gameEnded === false) {
    handleNextFlag(skipFlag);
  }

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box position="relative">
        {gameEnded ? (
          <GameEnded setGameEnded={setGameEnded} setCorrectCountriesGuessed={setCorrectCountriesGuessed} setRemainingCountries={setRemainingCountries} setUserScore={setUserScore} userScore={userScore} totalCountries={Object.keys(countries).length}/>
        ) : (
          <>
            <CountryFlag countryFlag={countryFlag} setSkipFlag={setSkipFlag} setGameEnded={setGameEnded} userScore={userScore} totalCountries={Object.keys(countries).length} countryToGuess={countryToGuess}/>
            <Map correctCountriesGuessed={correctCountriesGuessed} />
            <CountryInput
              countryToGuess={countryToGuess}
              setCorrectCountriesGuessed={setCorrectCountriesGuessed}
              setRemainingCountries={setRemainingCountries}
              countryCode={randomCountryCode.toUpperCase()}
              setGameEnded={setGameEnded}
              remainingCountries={remainingCountries}
              setUserScore={setUserScore}
            />
          </>
        )}
      </Box>
    </ScaleFade>
  );  
}

export default Game;
