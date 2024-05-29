import { Box, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Profile</Heading>
      <Text>Username: tech_user</Text>
      <Text>Email: tech_user@example.com</Text>
    </Box>
  );
};

export default Profile;