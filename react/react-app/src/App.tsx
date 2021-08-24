import { ChakraProvider } from "@chakra-ui/react";

import theme from './theme/theme';
import { SidebarLayout } from './components/templates/SidebarLayout';
import { Router } from './components/router/Router';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarLayout>
        <Router />
      </SidebarLayout>
    </ChakraProvider>
  );
}

export default App;
