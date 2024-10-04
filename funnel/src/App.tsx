import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { Global } from "@emotion/react";
import global from "./styles/global";

function App() {
  return (
    <ChakraProvider>
      <Global styles={global} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
