// import React, { useState } from "react";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Input,
//   Textarea,
//   Button,
//   Stack,
//   HStack,
//   Icon,
//   Link,
//   FormControl,
//   FormLabel,
// } from "@chakra-ui/react";
// import FaLinkedinIn from "react-icons/fa/FaLinkedinIn";
// import FaTiktok from "react-icons/fa/FaTiktok";
// import FaTwitter from "react-icons/fa/FaTwitter";

// const Contact = () => {
//   // const [phone, setPhone] = useState("");
//   // const [name, setName] = useState("");
//   // const [location, setLocation] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [message, setMessage] = useState("");
//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const handleSubmit = async (e) => {
//     const handleChange = (e) => {
//       e.preventDefault();
//       const { id, value } = e.target;
//       setForm((prev) => ({
//         ...prev,
//         [id]: value,
//       }));
//     };
//     e.preventDefault();

//     const emailjs = await import("@emailjs/browser");

//     await emailjs.send(
//       "service_vuioaji",
//       "template_ytogomk",
//       {
//         from_name: form.name,
//         to_name: "Ugwuzor David",
//         from_location: form.location,
//         from_email: form.email,
//         from_message: form.message,
//         from_phone: form.phone,
//       },
//       "WhPQ4ezNTE7J1VSLz"
//     );

//     // Reset form (ONE render)
//     setForm({
//       name: "",
//       location: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   };

//   return (
//     <Flex
//       as="section"
//       id="contact"
//       minH="100vh"
//       align="center"
//       justify="center"
//       bg="gray.100"
//       p={6}
//       w="100%"
//     >
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         w="full"
//         bg="white"
//         boxShadow="md"
//         rounded="lg"
//         overflow="hidden"
//       >
//         {/* Left Box: Contact Info */}
//         <Box as="aside" flex="1" p={8} bg="gray.50">
//           <Heading as="h2" size="lg" mb={4}>
//             Contact Info
//           </Heading>
//           <Stack spacing={2}>
//             <Text as="p">
//               <strong>Email:</strong>{" "}
//               <a href="mailto:ugwuzordavid005@gmail.com">
//                 ugwuzordavid005@gmail.com
//               </a>
//             </Text>
//             <Text as="p">
//               <strong>Phone:</strong>{" "}
//               <a href="tel:+2349013172370">+234 901 317 2370</a>
//             </Text>
//             <Text as="p">
//               <strong>Address:</strong> 123 Your Street, City, Nigeria
//             </Text>
//           </Stack>

//           <Box mt={6}>
//             <Heading as="h3" size="md" mb={2}>
//               Follow Us
//             </Heading>
//             <HStack spacing={4} mt={2}>
//               <Link
//                 href="https://linkedin.com/in/david-ugwuzor-400632302"
//                 isExternal
//                 aria-label="LinkedIn"
//                 rel="noopener noreferrer"
//                 cursor="pointer"
//                 transition="transform 0.2s ease"
//                 _hover={{ transform: "scale(1.2)" }}
//               >
//                 <Icon as={FaLinkedinIn} w={6} h={6} color="blue.600" />
//               </Link>

//               <Link
//                 href="https://www.tiktok.com/@david.devs"
//                 isExternal
//                 aria-label="TikTok"
//                 rel="noopener noreferrer"
//                 cursor="pointer"
//                 transition="transform 0.2s ease"
//                 _hover={{ transform: "scale(1.2)" }}
//               >
//                 <Icon as={FaTiktok} w={6} h={6} color="pink.800" />
//               </Link>

//               <Link
//                 href="https://x.com/DUgwuzor88650"
//                 isExternal
//                 aria-label="Twitter"
//                 rel="noopener noreferrer"
//                 cursor="pointer"
//                 transition="transform 0.2s ease"
//                 _hover={{ transform: "scale(1.2)" }}
//               >
//                 <Icon as={FaTwitter} w={6} h={6} color="blue.400" />
//               </Link>
//             </HStack>
//           </Box>
//         </Box>

//         {/* Right Box: Form */}
//         <Box flex="1" p={8}>
//           <Heading as="h2" size="lg" mb={4}>
//             Get In Touch
//           </Heading>
//           <Stack spacing={4}>
//             <form onSubmit={handleSubmit} h="fit-content">
//               <FormControl isRequired>
//                 <FormLabel htmlFor="name">Your Name</FormLabel>
//                 <Input
//                   id="name"
//                   mb="2"
//                   value={form.name}
//                   onChange={handleChange}
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel htmlFor="location">Location</FormLabel>
//                 <Input
//                   id="location"
//                   mb="2"
//                   value={form.location}
//                   onChange={handleChange}
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <Input
//                   id="email"
//                   mb="2"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel htmlFor="phone">Phone Number</FormLabel>
//                 <Input
//                   id="phone"
//                   mb="2"
//                   type="tel"
//                   value={form.phone}
//                   onChange={handleChange}
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel htmlFor="message">Message</FormLabel>
//                 <Textarea
//                   id="message"
//                   mb="2"
//                   placeholder="Your Message"
//                   h="32"
//                   resize="none"
//                   value={form.message}
//                   onChange={handl}
//                 />
//               </FormControl>

//               <Button colorScheme="blue" size="lg" type="submit" w="full">
//                 Send Message
//               </Button>
//             </form>
//           </Stack>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default Contact;
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
  useToast,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    message: "",
  });

  // handleChange outside handleSubmit
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        "service_vuioaji",
        "template_ytogomk",
        {
          from_name: form.name,
          to_name: "Ugwuzor David",
          from_location: form.location,
          from_email: form.email,
          from_message: form.message,
          from_phone: form.phone,
        },
        "WhPQ4ezNTE7J1VSLz",
      );

      // Reset form
      setForm({
        name: "",
        location: "",
        email: "",
        phone: "",
        message: "",
      });

      toast({
        title: "Message sent!",
        description: "I'll get back to you shortly.",
        status: "success",
        duration: 4000,
        isClosable: true,
              render: () => (
            <Box 
              color="white"
              p={4}
              bg="teal.500"
              borderRadius="md"
              display="flex"
              alignItems="center"
              h="500px"
              flexDirection="column"
            >
              <Image
                src="/successimg.webp"
                alt="icon"
                boxSize="150px"
                mr={3}
              />
              <Box>
                <Text fontWeight="bold">Message Sent!</Text>
                <Text fontSize="sm">I'll get back to you shortly.</Text>
              </Box>
            </Box>
          ),
        position: "top-right",
        
      });
    } catch (error) {
      toast({
        title: "Message not sent",
        description: "Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
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
            <Text>
              <strong>Email:</strong>{" "}
              <a href="mailto:ugwuzordavid005@gmail.com">
                ugwuzordavid005@gmail.com
              </a>
            </Text>
            <Text>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2349013172370">+234 901 317 2370</a>
            </Text>
            <Text>
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
              >
                <Icon as={FaLinkedinIn} w={6} h={6} color="blue.600" />
              </Link>
              <Link
                href="https://www.tiktok.com/@david.devs"
                isExternal
                aria-label="TikTok"
              >
                <Icon as={FaTiktok} w={6} h={6} color="pink.800" />
              </Link>
              <Link
                href="https://x.com/DUgwuzor88650"
                isExternal
                aria-label="Twitter"
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
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input id="name" value={form.name} onChange={handleChange} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  id="location"
                  value={form.location}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  h={32}
                  resize="none"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                size="lg"
                type="submit"
                w="full"
                mt="0.5rem"
              >
                Send Message
              </Button>
            </form>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
