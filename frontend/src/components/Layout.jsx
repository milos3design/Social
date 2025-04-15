import { Box, Flex, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <VStack w="100vw" minH="100vh" bg="#EDEDED">
      <Navbar />
      <Box w="100%">{children}</Box>
    </VStack>
  );
}

export default Layout;
