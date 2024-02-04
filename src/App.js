import * as React from 'react'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import "./App.css"
import Map from './components/Map'
import CountryInput from './components/CountryInput'
import CountryFlag from './components/CountryFlag'
import countries from './assets/countries'

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
  const randomCountryCode = Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)].toLowerCase()
  const countryToGuess = countries[randomCountryCode.toUpperCase()]
  const countryFlag = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${randomCountryCode}.svg`
  const [correctCountriesGussed, setCorrectCountriesGussed] = React.useState([])
  console.log(countryToGuess)

  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" >
        <CountryFlag countryFlag={countryFlag} />
        <Map correctCountriesGussed={correctCountriesGussed} />
        <CountryInput countryToGuess={countryToGuess} setCorrectCountriesGussed={setCorrectCountriesGussed} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
