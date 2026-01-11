import { Box, Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} textAlign="center">
      <Stack spacing={1}>
        <Text fontSize="sm">
          © 2026 Ugwuzor David Kanayo. All rights reserved.
        </Text>
        <Text fontSize="sm">
          Email: yourname@example.com | Phone: +234 123 456 7890
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
