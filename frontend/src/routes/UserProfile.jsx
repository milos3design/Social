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
import { useEffect, useState } from "react";
import { getUserProfileData } from "../api/endpoint";

function UserProfile() {
  const getUsernameFromUrl = () => {
    const urlSplit = window.location.pathname.split("/");
    return urlSplit[urlSplit.length - 1];
  };

  const [username, setUsername] = useState(getUsernameFromUrl());

  useEffect(() => {
    setUsername(getUsernameFromUrl());
  }, []);

  return (
    <div>
      <Flex w="100%" justifyContent="center">
        <VStack w="75%">
          <Box w="100%" mt="40px">
            <UserDetails username={username} />
          </Box>
        </VStack>
      </Flex>
    </div>
  );
}

const UserDetails = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfileData(username);
        setBio(data.bio);
        setProfileImage(data.profile_image);
        setFollowerCount(data.follower_count);
        setFollowingCount(data.following_count);
        console.log(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return (
    <VStack w="100%" alignItems="start" gap="40px">
      <Heading>{username}</Heading>
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
            src={`http://127.0.0.1:9000/api/${profileImage}`}
            boxSize="150px"
          />
        </Box>
        <VStack gap="20px">
          <HStack gap="20px" fontSize="18px">
            <VStack>
              <Text>Followers</Text>
              <Text>{followingCount}</Text>
            </VStack>
            <VStack>
              <Text>Followers</Text>
              <Text>{followerCount}</Text>
            </VStack>
          </HStack>
          <Button w="100%">Edit profile</Button>
        </VStack>
      </HStack>
      <Text>{bio}</Text>
    </VStack>
  );
};

export default UserProfile;
