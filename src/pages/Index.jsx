import { Container, Box, Text, VStack, Heading, Flex, Spacer, HStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const events = [
  {
    name: "Music Concert",
    date: "2023-10-01",
    time: "18:00",
    location: "City Hall",
    description: "Enjoy an evening of classical music with renowned artists."
  },
  {
    name: "Art Exhibition",
    date: "2023-10-05",
    time: "10:00",
    location: "Art Gallery",
    description: "Explore the latest contemporary art from local artists."
  },
  {
    name: "Tech Conference",
    date: "2023-10-10",
    time: "09:00",
    location: "Convention Center",
    description: "Join industry leaders to discuss the future of technology."
  },
  {
    name: "Food Festival",
    date: "2023-10-15",
    time: "12:00",
    location: "Central Park",
    description: "Taste delicious food from around the world."
  },
  {
    name: "Book Fair",
    date: "2023-10-20",
    time: "11:00",
    location: "Library",
    description: "Meet your favorite authors and discover new books."
  },
  {
    name: "Marathon",
    date: "2023-10-25",
    time: "07:00",
    location: "Downtown",
    description: "Participate in the annual city marathon."
  },
  {
    name: "Film Festival",
    date: "2023-10-30",
    time: "17:00",
    location: "Cinema Complex",
    description: "Watch the latest independent films."
  },
  {
    name: "Charity Gala",
    date: "2023-11-01",
    time: "19:00",
    location: "Grand Hotel",
    description: "Support a good cause at the annual charity gala."
  },
  {
    name: "Science Fair",
    date: "2023-11-05",
    time: "10:00",
    location: "Science Museum",
    description: "Discover exciting science projects by students."
  },
  {
    name: "Theater Play",
    date: "2023-11-10",
    time: "20:00",
    location: "Drama Theater",
    description: "Enjoy a captivating play performed by local actors."
  }
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={6}>
        <Heading size="lg">Event Listing</Heading>
      </Box>
      <VStack spacing={8}>
        {events.map((event, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
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