import { Box, Text, Flex, Avatar, Heading } from "@chakra-ui/react";
import React from 'react'

const Testimonials = () => {
    const testimonials = [
  {
    name: "Hannah Rough",
    role: "CEO, Example Co.",
    text: "David built our website flawlessly and delivered ahead of schedule!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
  name: "Michael Dean",
    role: "Freelancer",
    text: "Working with David was smooth and professional. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
    {
    name: "jacckson Glen",
    role: "CEO, Glen co.",
    text: "David built our  coffee website flawlessly and delivered ahead of schedule!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
];
  return (
  <Box py="16" px="6" bg="gray.50">
      <Heading mb="12" textAlign="center">What Clients Say</Heading>

      <Flex
        direction={{ base: "column", md: "row" }} // vertical on mobile, horizontal on desktop
        justify="center"
        align="center"
        gap="6" // space between boxes
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            w={{ base: "100%", md: "400px" }} // 300px width on desktop, full width on mobile
            maxW="320px"
            minH="fit-content"
            h="400px"
            p="6"
            bg="white"
            shadow="lg"
            borderRadius="md"
            textAlign="center"
          >
          <Flex align="start">
            <Text fontSize="100px" color="blue.300" fontWeight="bold" lineHeight="1" textAlign="center"  >❛❛</Text>
          </Flex>
            <Avatar src={testimonial.avatar} name={testimonial.name} mb="4" size="xl" mx="auto" />
            <Text mb="3">"{testimonial.text}"</Text>
            <Flex justify="center" align="end" w="100%" h="fit-content" p="0.3rem" bg="transparent" flexDirection="column">
            <Text fontWeight="bold">{testimonial.name}</Text>
            <Text color="gray.500">{testimonial.role}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default Testimonials
