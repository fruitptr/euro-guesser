import * as React from 'react'
import { ChakraProvider, Box, extendTheme, Heading, Button, Icon, Link } from '@chakra-ui/react'
import "./App.css"
import Game from './components/Game'
import { AiFillGithub } from 'react-icons/ai';

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
  const [startGame, setStartGame] = React.useState(false);
  const handleStartGame = () => {
    setStartGame(true);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box>
        {startGame ? (
          <Game/>
        ) : (
        <Box id='background' display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100vh' bg='#e8f1e7' backgroundImage='url("https://i.imgur.com/aDuepye.png")'>
          <Heading as='h1' size='4xl' noOfLines={1} marginBottom='1rem'>
              Welcome to EuroGuesser
          </Heading>
          <Heading as='h3' size='lg' marginBottom='1rem'>
            If you like this game, please considering giving it a star on GitHub!
          </Heading>
          <Box display='flex' justifyContent='center' flexDirection='row'>
              <Button _hover={{bgColor:'#E2E8F0', color: 'black', svg: { color: "black" }}}leftIcon={<Icon id='github-icon' as={AiFillGithub} color="white"/>} bgColor='black' color='white' varient='outline' marginLeft='1rem' href='https://github.com/fruitptr'>
                <Link href='https://github.com/fruitptr/country-guesser' isExternal>
                  GitHub
                </Link>
              </Button>
              <Button bgColor='#94AD99' colorScheme='green' marginLeft='1rem' onClick={handleStartGame}>Start</Button>
          </Box>
        </Box>
        )}
      </Box>
    </ChakraProvider>
  );  
}

export default App;
