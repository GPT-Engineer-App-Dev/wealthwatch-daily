import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Financial News</Heading>
          <Text fontSize="lg" color="gray.600">Stay updated with the latest financial news and market data</Text>
        </Box>

        <Divider />

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text mt={2}>Summary of the headline 1...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text mt={2}>Summary of the headline 2...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Market Data</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Market 1</Heading>
              <Text mt={2}>Details of market 1...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Market 2</Heading>
              <Text mt={2}>Details of market 2...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Market 3</Heading>
              <Text mt={2}>Details of market 3...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Featured Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Article 1</Heading>
              <Text mt={2}>Summary of the article 1...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Article 2</Heading>
              <Text mt={2}>Summary of the article 2...</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;