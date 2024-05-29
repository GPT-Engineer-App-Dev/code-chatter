import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Welcome to Tech Forum</Heading>
        <Text>Join the discussion and share your knowledge with the tech community.</Text>
      </VStack>
    </Box>
  );
};

export default Index;