import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = ["JavaScript", "Python", "Java", "Web Development", "Mobile Development"];

  return (
    <Box p={4}>
      <Heading mb={4}>Categories</Heading>
      <List spacing={3}>
        {categories.map((category) => (
          <ListItem key={category}>
            <Link as={NavLink} to={`/categories/${category.toLowerCase().replace(/ /g, "-")}`} color="brand.800" _hover={{ textDecoration: "none", color: "brand.700" }}>
              {category}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Categories;