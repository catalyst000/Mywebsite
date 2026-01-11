import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  HStack,
  Icon,
  Link,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";

const Contact = () => {      
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const TemplateId = "template_ytogomk";
    const ServiceId = "service_vuioaji";
    const PublicKey = "WhPQ4ezNTE7J1VSLz";

    // Parameters
    const TemplateParams = {
      from_name: name,
      to_name: "Ugwuzor David",
      from_location: location,
      from_email: email,
      from_message: message,
      from_phone: phone,
    };

    // Send functon

    emailjs
      .send(ServiceId, TemplateId, TemplateParams, PublicKey)

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmail("");
        setLocation("");
        setName("");
        setMessage("");
        setPhone("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <Flex
      as="section"
      id="contact"
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.100"
      p={6}
      w="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        w="full"
        bg="white"
        boxShadow="md"
        rounded="lg"
        overflow="hidden"
      >
        {/* Left Box: Contact Info */}
        <Box as="aside" flex="1" p={8} bg="gray.50">
          <Heading as="h2" size="lg" mb={4}>
            Contact Info
          </Heading>
          <Stack spacing={2}>
            <Text as="p">
              <strong>Email:</strong>{" "}
              <a href="mailto:ugwuzordavid005@gmail.com">
                ugwuzordavid005@gmail.com
              </a>
            </Text>
            <Text as="p">
              <strong>Phone:</strong>{" "}
              <a href="tel:+2349013172370">+234 901 317 2370</a>
            </Text>
            <Text as="p">
              <strong>Address:</strong> 123 Your Street, City, Nigeria
            </Text>
          </Stack>

          <Box mt={6}>
            <Heading as="h3" size="md" mb={2}>
              Follow Us
            </Heading>
            <HStack spacing={4} mt={2}>
              <Link
                href="https://linkedin.com/in/david-ugwuzor-400632302"
                isExternal
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                cursor="pointer"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.2)" }}
              >
                <Icon as={FaLinkedinIn} w={6} h={6} color="blue.600" />
              </Link>

              <Link
                href="https://www.tiktok.com/@david.devs"
                isExternal
                aria-label="TikTok"
                rel="noopener noreferrer"
                cursor="pointer"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.2)" }}
              >
                <Icon as={FaTiktok} w={6} h={6} color="pink.800" />
              </Link>

              <Link
                href="https://x.com/DUgwuzor88650"
                isExternal
                aria-label="Twitter"
                rel="noopener noreferrer"
                cursor="pointer"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.2)" }}
              >
                <Icon as={FaTwitter} w={6} h={6} color="blue.400" />
              </Link>
            </HStack>
          </Box>
        </Box>

        {/* Right Box: Form */}
        <Box flex="1" p={8}>
          <Heading as="h2" size="lg" mb={4}>
            Get In Touch
          </Heading>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit} h="fit-content">
              <FormControl isRequired>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input
                  id="name"
                  mb="2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  id="location"
                  mb="2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  mb="2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input
                  id="phone"
                  mb="2"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  mb="2"
                  placeholder="Your Message"
                  h="32"
                  resize="none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <Button colorScheme="blue" size="lg" type="submit" w="full">
                Send Message
              </Button>
            </form>
          </Stack>
        </Box>
      </Flex>

      {/* Optional JSON-LD schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ugwuzor David",
            email: "ugwuzordavid005@gmail.com",
            telephone: "+2349013172370",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Your Street",
              addressLocality: "City",
              addressCountry: "Nigeria",
            },
            sameAs: [
              "https://linkedin.com/in/david-ugwuzor-400632302",
              "https://www.tiktok.com/@david.devs",
              "https://x.com/DUgwuzor88650",
            ],
          }),
        }}
      />
    </Flex>
  );
};

export default Contact;
