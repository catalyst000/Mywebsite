import { Box, Text, Flex, Avatar, Heading } from "@chakra-ui/react";
import React from 'react';
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hannah Rough",
      role: "CEO at Gourmet Bites",
      text: "David built our website flawlessly and delivered ahead of schedule!",
      avatar: "https://i.pravatar.cc/150?img=1",
      animation: {
        initial: { x: -200, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { type: "spring", stiffness: 120, damping: 12 },
        viewport: { once: true , amount: 0.35 },
      },
    },
    {
      name: "Michael Dean",
      role: "Enterpreneur",
      text: "Working with David was smooth and professional. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Jackson Glen",
      role: "Consultant",
      text: "David built our coffee website flawlessly and delivered ahead of schedule!",
      avatar: "https://i.pravatar.cc/150?img=3",
      animation: {
        initial: { x: 200, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { type: "spring", stiffness: 120, damping: 12 },
        viewport: { once: true , amount: 0.35 },
      },
    },
  ];

  return (
    <Box as="section" py="16" px="6" bg="gray.50" aria-label="Client Testimonials">
      <Heading as="h2" mb="12" textAlign="center" fontFamily="'Playfair Display', serif">
        What Clients Say
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap="6"
        pt="1rem"
        pb="1rem"
        
      >
        {testimonials.map((testimonial, index) => (
          <MotionBox
            as="article"
            key={index}
            {...testimonial.animation}
            w={{ base: "100%", md: "400px" }}
            maxW="320px"
            minH="fit-content"
            h="300px"
            p="6"
            bg="white"
            shadow="lg"
            borderRadius="md"
            textAlign="left"
          >
            <Flex mb="4" align="flex-start" flexDirection="column">
              <Text fontSize="80px"  color="blue.300" fontWeight="bold" lineHeight="1" mr="4">
                ❛❛
              </Text>
              <blockquote>
                <Text fontSize="md" lineHeight="1.6">{testimonial.text}</Text>
              </blockquote>
            </Flex>

            <Flex align="end" justify="end" mt="6" gap="3">
              <Avatar src={testimonial.avatar} name={testimonial.name} size="sm" />
              <Box>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text color="gray.500" fontSize="sm">{testimonial.role}</Text>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
