import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import { UserRegistration } from './components/pages/UserRegistration';
import theme from './theme/theme';
import { HeaderLayout } from './components/templates/HeaderLayout';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout><UserRegistration /></HeaderLayout>
    </ChakraProvider>
  );
}

export default App;
