import * as React from 'react'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import "./App.css"
import Map from './components/Map'
import CountryInput from './components/CountryInput'
import CountryFlag from './components/CountryFlag'

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
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" >
        <CountryFlag />
        <Map />
        <CountryInput />
      </Box>
    </ChakraProvider>
  );
}

export default App;
