import { Flex, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";

function Navbar() {
  const nav = useNavigate();
  const handleNavigate = (route) => {
    nav(`/${route}`);
  };

  return (
    <div>
      <Flex
        w="100vw"
        h="90px"
        bg="blue.600"
        justifyContent="center"
        alignItems="center"
      >
        <HStack w="90%" justifyContent="space-between" color="white">
          <Text fontSize="24px" fontWeight="bold">
            SocialHub
          </Text>
          <HStack>
            <Text onClick={(route) => handleNavigate("shommy")}>
              <MdPersonOutline size="28px" />
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </div>
  );
}

export default Navbar;
