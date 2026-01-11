import React from "react";
import { Flex, Box, Text, Image, Link, Button } from "@chakra-ui/react";

const Ourwork = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      stack: "React • Chakra UI ",
      image: "/mypicture.webp",
      link: "https://stepoutt-nyhp.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      stack: "Next.js • Chakra UI",
      image: "/mypicture.webp",
    },
    {
      id: 3,
      title: "Landing Page",
      stack: "React • Chakra UI Design",
      image: "/mypicture.webp",
    },
  ];
  return (
    <Box
      id="works"
      display="flex"
      gap={8}
      overflowX="auto"
      scrollSnapType="x mandatory"
      p="2rem"
      css={{
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {projects.map((project) => (
        <Box
          key={project.id}
          maxW={{ base: "85vw", md: "70vw" }}
          minW="250px"
          scrollSnapAlign="start"
          bg="white"
          borderRadius="2xl"
          p={3}
          boxShadow="0 20px 40px rgba(0,0,0,0.08)"
          position="relative"
          _hover={{
            transform: "translateY(-6px)",
            transition: "0.3s ease",
          }}
        >
          {/* image */}
          <Image
            src={project.image}
            alt={`${project.title} desktop`}
            borderRadius="xl"
          />

          <Flex
            w="100%"
            h="30px"
            justify="space-between"
            align="center"
            bg="transparent"
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="semibold">
              {project.title}
            </Text>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              cursor="pointer"
              _hover={{ fill: "blue.300" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.19 9.05 7.61 10.52.56.1.77-.24.77-.54v-1.9c-3.1.67-3.76-1.49-3.76-1.49-.51-1.29-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.6 10.6 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.29-2.6 5.23-5.09 5.51.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54 4.41-1.47 7.6-5.62 7.6-10.52C23.25 5.48 18.27.5 12 .5z"
              />
            </svg>
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            mt={2}
            w="100%"
            h="60px"
            bg="transparent"
          >
            <Text fontSize="sm" color="gray.500">
              {project.stack}
            </Text>
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              size="sm"
              bgGradient="linear(to-r, blue.600,purple.200, blue.600)"
              color="white"
              transform="translateY(10px) skewX(10deg)"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(0.97)",
              }}
              _active={{
                transform: "scale(0.97)",
              }}
            >
              View Project
            </Button>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Ourwork;
