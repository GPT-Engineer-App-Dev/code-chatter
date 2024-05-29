import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const LatestPosts = () => {
  const posts = [
    { title: "Understanding Closures in JavaScript", author: "John Doe", date: "2023-10-01" },
    { title: "Introduction to React Hooks", author: "Jane Smith", date: "2023-09-28" },
    { title: "Async/Await in Python", author: "Alice Johnson", date: "2023-09-25" },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Latest Posts</Heading>
      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md">{post.title}</Heading>
            <Text>by {post.author} on {post.date}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default LatestPosts;