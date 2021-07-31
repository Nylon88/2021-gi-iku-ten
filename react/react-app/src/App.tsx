import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import { UserRegistration } from './components/pages/UserRegistration';
import theme from './theme/theme';
import { HeaderLayout } from './components/templates/HeaderLayout';
import { Router } from './components/router/Router';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout>
        <Router />
      </HeaderLayout>
    </ChakraProvider>
  );
}

export default App;
