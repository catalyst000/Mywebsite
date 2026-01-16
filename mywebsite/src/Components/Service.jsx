import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Web design service"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="blue" strokeWidth="1.5" />
        <path
          d="M14 14l4 4M16 10l-6 6"
          stroke="blue"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Web Design",
    desc: "Modern, user-focused UI designs that convert visitors into customers.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Web development service"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="blue" strokeWidth="1.5" />
        <circle cx="6" cy="7" r="0.8" stroke="blue" />
        <circle cx="9" cy="7" r="0.8" stroke="blue" />
        <circle cx="12" cy="7" r="0.8" stroke="blue" />
        <path
          d="M9 11l-2 2 2 2M15 11l2 2-2 2"
          stroke="blue"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Web Development",
    desc: "Fast, scalable, and responsive websites built with clean code.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="SEO optimization service"
      >
        <circle cx="10" cy="10" r="6" stroke="blue" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="20" y2="20" stroke="blue" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M7 10l3-3 3 3M10 7v6"
          stroke="blue"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "SEO Optimization",
    desc: "Search-engine-friendly structure to improve visibility and ranking.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Website maintenance and support service"
      >
        <circle cx="12" cy="12" r="6" stroke="blue" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "Maintenance and Support",
    desc: "Complete overhaul of your website's design and user experience.",
  },
];

const Service = () => {
  return (
    <Box
      as="section"
      w="100%"
      display="flex"
      flexDirection="column"
      bg="white"
      py={8}
    >
      <Text as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Our Services
      </Text>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        px={4}
      >
        {services.map((service, index) => (
          <MotionBox
            key={index}
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="md"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 1, delay: index * 0.2 }}
            _hover={{ transform: "translateY(-6px)" }}
            transitionProperty="transform"
            transitionDuration="0.3s"
            cursor="pointer"
          >
            <Box h="100px" w="100%" mb={4}>
              {service.icon}
            </Box>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {service.title}
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              {service.desc}
            </Text>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
