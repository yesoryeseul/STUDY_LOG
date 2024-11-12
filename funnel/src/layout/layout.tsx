import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100dvh"
      width={["sm", "md", "lg", "xl"]}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
