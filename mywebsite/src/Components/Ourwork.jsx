
import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";

const Ourwork = () => {
  const projects = [
    {
      id: 1,
      title: "Adventure Website",
      stack: "React • Chakra UI ",
      image: "/adventure-website project.webp",
      link: "https://stepoutt-nyhp.vercel.app/",
    },
    {
      id: 2,
      title: "Coffee Website",
      stack: "Next.js • Chakra UI",
      image: "/coffee-website project.webp",
      link: "https://coffee-store-tawny.vercel.app/",
    },
    {
      id: 3,
      title: "Real Estate Website",
      stack: "React • Chakra UI Design",
      image: "/realestate-website project.webp",
      link: "https://real-estate-site-green.vercel.app",
    },
        {
      id: 4,
      title: "Fashion Design Website",
      stack: "React • Chakra UI Design",
      image: "/fashion-design website project.webp",
      link: "",
    },
  ];

  return (
    <Flex
      as="section"
      id="portfolio-projects"
      direction="column"
      aria-labelledby="our-work-heading"
      textAlign="center"
    >
      <Heading as="h2" size="lg" mb={4} id="our-work-heading" fontFamily="'Playfair Display', serif" >
        Work Speaks
      </Heading>

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
            as="article"
            maxW={{ base: "85vw", md: "70vw" }}
            minW="450px"
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
            {/* Project image */}
            <Link
              href={project.link}
              isExternal
              rel="noopener noreferrer"
            >
              <Image
                src={project.image}
                alt={`${project.title} built with ${project.stack}`}
                borderRadius="xl"
                loading="eager"
                decoding="async"
                w="100%"
                h="250px"
                objectFit="cover"
              />
            </Link>

            <Flex
              w="100%"
              h="30px"
              justify="space-between"
              align="center"
              bg="transparent"
              textAlign="center"
            >
              <Link
                href={project.link}
                isExternal
                rel="noopener noreferrer"
                fontWeight="semibold"
              >
                <Text fontSize="lg">
                  {project.title}
                </Text>
              </Link>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-label={`${project.title} source link`}
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
            >
              <Text fontSize="sm" color="gray.500">
                {project.stack}
              </Text>

              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                bgGradient="linear(to-r, blue.600,purple.200, blue.600)"
                color="white"
              >
                View Project
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Ourwork;
