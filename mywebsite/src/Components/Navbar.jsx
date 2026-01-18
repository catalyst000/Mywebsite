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
  <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="5" />

  <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
  <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2"/>
  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
  <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
  <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2"/>
  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
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
      as="nav"
      bg={isDark ? "gray.800" : "blue.600"}
      px={2}
      py={1.5}
      color="white"
      h="60px"
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      boxShadow="md"
    >
      <Flex align="center" justify="space-between" h="100%">
        {/* Logo */}
        <Link href="#hero" aria-label="Go to home section" title="DECODES Home">
          <Text as="span" fontWeight="bold" fontSize="xl">
            DECODES
          </Text>
        </Link>

        {/* Desktop Links */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link
              fontFamily="'Playfair Display', serif"
              textDecoration="none"
              key={link.name}
              href={link.href}
              aria-label={`Navigate to ${link.name} section`}
              title={link.name}
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Buttons */}
        <Flex h="100%" w="auto" align="center" gap={2}>
          <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
            icon={<DarkModeIcon isDark={isDark} />}
            variant="ghost"
          />
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon/> : <MenuIcon />}
            variant="ghost"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          />
        </Flex>
      </Flex>

      {/* Mobile Links */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          role="menu"
          spacing={4}
          mt={0}
          display={{ base: "flex", md: "none" }}
          align="stretch"
          bg={isDark ? "gray.800" : "blue.500"}
          w="100%"
          p={4}
          borderRadius="md"
          zIndex={20}
          position="absolute"
          top="60px"
          left={0}
          shadow="md"
        >
          {links.map((link) => (
            <Link
              role="menuitem"
              key={link.name}
              href={link.href}
              aria-label={`Navigate to ${link.name} section`}
              title={link.name}
              textDecoration="none"
              color="white"
            >
              {link.name}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}
