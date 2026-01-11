import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  VStack,
  Collapse,
  Text,
} from "@chakra-ui/react";

// SVG icons
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L12 14.83l-6.29 6.3-1.42-1.41L10.59 12 4.3 5.71 5.71 4.3 12 10.59l6.29-6.3 1.42 1.41z" />
  </svg>
);

const DarkModeIcon = ({ isDark }) =>
  isDark ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 4V1h-2v3h2zm0 19v-3h-2v3h2zm8.66-5.66l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zM3.22 17.66l2.12-2.12-1.41-1.41-2.12 2.12 1.41 1.41zM22 12h3v-2h-3v2zm-19 0H1v-2h2v2zm16.24 6.16l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM4.22 6.34L2.8 4.93 1.39 6.34l1.42 1.42 1.41-1.42zM12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onToggle } = useDisclosure();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Box
      bg={isDark ? "gray.800" : "blue.600"}
      px={2}
      py={1.5}
      color="white"
      as="nav"
      h="60px"
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      boxShadow="md"
    >
      <Flex align="center" justify="space-between" bg="transparent" h="100%">
        {/* Logo */}
        <Text fontWeight="bold" fontSize="xl">
          DECODES
        </Text>

        {/* Desktop Links */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link
              fontFamily="'Playfair Display', serif"
              textDecoration="none"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <Flex h="100%" w="auto" bg="transparent" align="center" gap={2}>
          <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
            icon={<DarkModeIcon isDark={isDark} />}
            variant="ghost"
          />
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <MenuIcon />}
            variant="ghost"
            aria-label="Open Menu"
          />
        </Flex>
      </Flex>

      {/* Mobile Links */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          spacing={4}
          mt={0} // remove extra margin
          display={{ base: "flex", md: "none" }}
          align="stretch"
          bg={isDark ? "gray.800" : "blue.500"} // visible background
          w="100%"
          p={4}
          borderRadius="md"
          zIndex={20} // above video / hero
          position="absolute" // overlays content
          top="60px" // adjust for navbar height
          left={0}
          shadow="md" // optional: adds drop shadow
        >
          {links.map((link) => (
            <Link
              textDecoration="none"
              color="white"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}
