import { Container, Box, Text, VStack, Heading, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useEvents } from "../integrations/supabase/index.js";

import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const [events, setEvents] = useState([]);
  const { data, error, isLoading } = useEvents();

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  if (!session) {
    return (
      <Container maxW="container.lg" p={4}>
        <Box as="nav" bg="blue.500" color="white" p={4} mb={6}>
          <Heading size="lg">Event Listing</Heading>
        </Box>
        <SupabaseAuthUI />
      </Container>
    );
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading events: {error.message}</Text>;
  }

  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={6}>
        <Flex align="center">
          <Heading size="lg">Event Listing</Heading>
          <Spacer />
          <Button colorScheme="red" onClick={logout}>Logout</Button>
        </Flex>
      </Box>
      <VStack spacing={8}>
        {events.map((event) => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
            <Heading fontSize="xl" mb={2}>{event.name}</Heading>
            <HStack spacing={4} mb={2}>
              <Flex align="center">
                <FaCalendarAlt />
                <Text ml={2}>{event.date}</Text>
              </Flex>
              <Flex align="center">
                <FaClock />
                <Text ml={2}>{event.time}</Text>
              </Flex>
              <Flex align="center">
                <FaMapMarkerAlt />
                <Text ml={2}>{event.location}</Text>
              </Flex>
            </HStack>
            <Text>{event.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;