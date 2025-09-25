// src/NotFound.js
import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading fontSize="6xl" color="purple.500">
          404
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Oops! The page you’re looking for doesn’t exist.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          colorScheme="purple"
          size="lg"
          rounded="full"
        >
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
}
