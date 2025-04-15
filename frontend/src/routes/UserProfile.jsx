import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

function UserProfile() {
  return (
    <div>
      <Flex w="100%" justifyContent="center">
        <VStack w="75%">
          <Box w="100%" mt="40px">
            <UserDetails />
          </Box>
        </VStack>
      </Flex>
    </div>
  );
}

const UserDetails = () => {
  return (
    <VStack w="100%" alignItems="start" gap="40px">
      <Heading>shommy</Heading>
      <HStack gap="20px">
        <Box
          boxSize="150px"
          border="2px solid"
          borderColor="gray.700"
          bg="white"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="http://127.0.0.1:9000/api/media/profile_image/128.jfif"
            boxSize="150px"
          />
        </Box>
        <VStack>
          <HStack>
            <VStack>
              <Text>Followers</Text>
              <Text>0</Text>
            </VStack>
            <VStack>
              <Text>Followers</Text>
              <Text>0</Text>
            </VStack>
          </HStack>
          <Button w="100%">Edit profile</Button>
        </VStack>
      </HStack>
      <Text>Hi, it's Shommy</Text>
    </VStack>
  );
};

export default UserProfile;
