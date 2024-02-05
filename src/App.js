import * as React from 'react'
import { ChakraProvider, Box, extendTheme, Heading, Button, Icon, Link, UnorderedList, ListItem, Highlight, Kbd } from '@chakra-ui/react'
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
          <Heading as='h1' size='4xl' noOfLines={1} marginBottom='1rem' fontFamily='"cg",Courier,system-ui,sans-serif' textAlign='center'>
              Welcome to EuroGuesser
          </Heading>
          <Heading as='h3' size='lg' marginBottom='1rem' fontFamily='"cg",Courier,system-ui,sans-serif' textAlign='center'>
            If you like this game, please considering giving it a star on GitHub!
          </Heading>
          <Box display='flex' justifyContent='center' flexDirection='row' marginBottom='1rem'>
              <Button _hover={{bgColor:'#E2E8F0', color: 'black', svg: { color: "black" }}}leftIcon={<Icon id='github-icon' as={AiFillGithub} color="white"/>} bgColor='black' color='white' varient='outline' marginLeft='1rem' href='https://github.com/fruitptr'>
                <Link href='https://github.com/fruitptr/country-guesser' isExternal>
                  GitHub
                </Link>
              </Button>
              <Button colorScheme='green' marginLeft='1rem' onClick={handleStartGame}>Start</Button>
          </Box>
          <Box backdropFilter="auto" backdropBlur="3px" padding={10} borderRadius='2xl' boxShadow='dark-lg' fontFamily='"cg",Courier,system-ui,sans-serif'>
            <Heading as='h3' size='lg' fontFamily='"cg",Courier,system-ui,sans-serif' marginBottom='1rem'>
                Instructions:
            </Heading>
            <UnorderedList >
              <ListItem>Enter the name of the country in the input field and press <Kbd>enter</Kbd> to guess the country.</ListItem>
              <ListItem>If you need a hint, press the hint button.</ListItem>
              <ListItem>If you want to skip the current flag, press the skip button.</ListItem>
              <ListItem>If you want to give up, press the give up button.</ListItem>
              <ListItem><Highlight query={['56 countries', '3 minutes.']} styles={{ px: '2', py: '1', rounded: 'full', bg: '#b8cfbd' }}>
                There are 56 countries to guess in 3 minutes. Good luck!</Highlight></ListItem>
            </UnorderedList>
          </Box>
        </Box>
        )}
      </Box>
    </ChakraProvider>
  );  
}

export default App;
