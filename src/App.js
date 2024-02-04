import * as React from 'react'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import "./App.css"
import Map from './components/Map'
import CountryInput from './components/CountryInput'
import CountryFlag from './components/CountryFlag'
import countries from './assets/countries'
import GameEnded from './components/GameEnded'

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E0E0E0",
      100: "#FFFFFF",
      500: "#94AD99",
    }
  }
});

function App() {
  let randomCountryCode = '';
  let countryToGuess = '';
  let countryFlag = '';
  const [gameEnded, setGameEnded] = React.useState(false);
  const [remainingCountries, setRemainingCountries] = React.useState(Object.keys(countries));
  const [correctCountriesGuessed, setCorrectCountriesGuessed] = React.useState([]);
  
  if (remainingCountries.length !== 0 && gameEnded === false) {
    randomCountryCode = remainingCountries[Math.floor(Math.random() * remainingCountries.length)].toLowerCase();
    countryToGuess = countries[randomCountryCode.toUpperCase()];
    countryFlag = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${randomCountryCode}.svg`;
  }

  return (
    <ChakraProvider theme={theme}>
      <Box position="relative">
        {gameEnded ? (
          <GameEnded setGameEnded={setGameEnded} setCorrectCountriesGuessed={setCorrectCountriesGuessed} setRemainingCountries={setRemainingCountries}/>
        ) : (
          <>
            <CountryFlag countryFlag={countryFlag} />
            <Map correctCountriesGuessed={correctCountriesGuessed} />
            <CountryInput
              countryToGuess={countryToGuess}
              setCorrectCountriesGuessed={setCorrectCountriesGuessed}
              setRemainingCountries={setRemainingCountries}
              countryCode={randomCountryCode.toUpperCase()}
              setGameEnded={setGameEnded}
              remainingCountries={remainingCountries}
            />
          </>
        )}
      </Box>
    </ChakraProvider>
  );  
}

export default App;
