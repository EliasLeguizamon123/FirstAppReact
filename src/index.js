import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, ColorModeScript, Button, useColorMode,} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import theme from 'styles/theme';

export default function Toggle(){
    const {colorMode, toggleColorMode} = useColorMode()
    return (
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
           )
}

ReactDOM.render(
  <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
