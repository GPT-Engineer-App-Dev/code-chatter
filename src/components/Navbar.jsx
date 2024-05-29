import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Tech Forum
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/categories" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.700" }}>
            Categories
          </Link>
          <Link as={NavLink} to="/latest-posts" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.700" }}>
            Latest Posts
          </Link>
          <Link as={NavLink} to="/profile" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.700" }}>
            Profile
          </Link>
          <Link as={NavLink} to="/register" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.700" }}>
            Register
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;