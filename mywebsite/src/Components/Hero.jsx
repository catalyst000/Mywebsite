import React from "react";
import { motion, useInView } from "framer-motion";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Hero = () => {
  const MotionBox = motion(Box);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  return (
    <Box w="100%" h="fit=-content" bg="transparent" id="hero">
      <Navbar />
      <Box
        as="video"
        src="/bg-video.webm"
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        height={{ base: "335px", md: "64vh" }}
        preload="auto"
        poster="/hero-fallbackimg.webp"
        objectFit="cover"
        position="absolute"
        top="60px" // adjust for navbar height
        left={0}
        zIndex={1} // so content appears on top
      />
      <Box
        ref={ref1}
        position="relative"
        mt="50px"
        justifyContent="space-between"
        bg="transparent"
        h="80%"
        display="flex"
        gap="5rem"
        flexDirection={{ base: "column", md: "row" }}
        zIndex={1}
        p={4}
        color="white"
        fontFamily="'Playfair Display', serif"
      >
        <MotionBox
          bg="transparent"
          w={{ base: "100%", md: "600px" }}
          p={2}
          h="fit-content"
          mb={{ base: "2rem", md: "" }}
          initial={{ x: -150, opacity: 0 }} // <-- starting state
          whileInView={{ x: 0, opacity: 1 }} // <-- animate when visible
          viewport={{ once: true, amount: 0.3 }} // <-- triggers when 30% visible
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <Text
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.2", md: "1.1" }}
            maxW="650px"
          >
            Let's work together to build your brand solution
          </Text>

          <Text
            as="p"
            mt={{ base: 3, md: 4 }}
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            lineHeight="1.6"
            color="#F8FAFC"
            maxW="600px"
          >
            From concept to launch, I create fast, accessible, and scalable
            website
          </Text>

          <Box mt={2} display="flex" gap={4} h="fit-content">
            <Link href="#portfolio-projects" aria-label="See Our Works">
              <Box
                h="50px"
                as="button"
                px={{ base: "3", md: "6" }}
                py={{ base: "1", md: "3" }}
                color="white"
                fontWeight="medium"
                borderRadius="xl"
                transform="translateY(10px) skewX(10deg)"
                bg="rgba(255, 255, 255, 0.15)"
                // backdropFilter="blur(12px)"
                border="1px solid rgba(255, 255, 255, 0.35)"
                boxShadow="0 8px 24px rgba(0, 0, 0, 0.25)"
                transition="all 0.3s ease"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.25)",
                  transform: "translateY(-2px) skewX(-10deg)",
                }}
                _active={{
                  transform: "scale(0.97)",
                }}
              >
                Our Works
              </Box>
            </Link>

            <Link href="#contact" aria-label="See Our Works">
              <Box
                h="50px"
                as="button"
                px={{ base: "3", md: "6" }}
                py={{ base: "1", md: "3" }}
                color="white"
                fontWeight="medium"
                borderRadius="xl"
                transform="translateY(10px) skewX(10deg)"
                bg="rgba(6, 79, 152, 1)"
                backdropFilter="blur(12px)"
                border="1px solid rgba(173, 216, 230, 0.4)"
                boxShadow="0 8px 24px rgba(0, 0, 0, 0.25)"
                transition="all 0.3s ease"
                _hover={{
                  bg: "rgba(30, 144, 255, 0.28)",
                  transform: "translateY(-2px) skewX(-10deg)",
                }}
                _active={{
                  transform: "scale(0.97)",
                }}
              >
                Book Us
              </Box>
            </Link>
          </Box>
          <Flex
            w="100%"
            h="fit-content"
            bg="transparent"
            mt={6}
            align="center"
            justify="space-even"
            gap={6}
          >
            {/* Twitter icon  */}
            <a
              aria-label="Twitter"
              href="https://x.com/DUgwuzor88650"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                cursor="pointer"
                m="1rem"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.846h-7.406l-5.804-7.584-6.64 7.584H.47l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.5h2.04L6.48 3.23H4.298L17.61 20.653Z" />
              </svg>
            </a>
            {/* LInkedin icon */}
            <a
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/david-ugwuzor-400632302"
              isExternal
              cursor="pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                cursor="pointer"
              >
                <path
                  fill="#FFFFFF"
                  cursor="pointer"
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.18h.07c.67-1.27 2.3-2.6 4.74-2.6C21.5 7.58 24 10 24 15.1V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-5V8z"
                />
              </svg>
            </a>

            {/* Whatsapp icon */}
            <a
              aria-label="WhatsApp"
              href="https://wa.me/2349013172370"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="currentColor"
                m="10rem"
                cursor="pointer"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.117.553 4.162 1.604 5.995L0 24l6.123-1.602A11.936 11.936 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.243-6.195-3.48-8.52zm-8.52 18c-1.897 0-3.748-.497-5.336-1.437l-.382-.227-3.64.951.972-3.55-.25-.394A9.936 9.936 0 012 12c0-5.523 4.477-10 10-10 2.654 0 5.144 1.036 7.022 2.914A9.93 9.93 0 0122 12c0 5.523-4.477 10-10 10zm5.46-7.914c-.076-.127-.277-.198-.58-.347-.303-.149-1.793-.885-2.072-.987-.28-.099-.484-.149-.687.148-.198.297-.767.985-.939 1.184-.173.198-.346.223-.643.074-.297-.149-1.254-.463-2.39-1.473-.883-.788-1.478-1.761-1.65-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.52-.075-.148-.671-1.612-.92-2.207-.242-.579-.486-.5-.669-.51l-.573-.01c-.198 0-.521.074-.792.372s-1.04 1.016-1.04 2.48 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.078 4.488.709.306 1.26.489 1.69.625.709.227 1.36.195 1.872.118.571-.085 1.757-.719 2.005-1.413.248-.696.248-1.29.173-1.413z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              aria-label="Instagram"
              href="https://instagram.com/ugwuzordavid005?igsh=NDhtZXh2aDFidm5t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                cursor="pointer"
              >
                <path
                  fill="#FFFFFF"
                  cursor="pointer"
                  d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.804.246 2.227.412.56.218.96.48 1.38.9.42.42.683.82.9 1.38.166.423.356 1.057.412 2.227.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.804-.412 2.227a3.77 3.77 0 0 1-.9 1.38 3.77 3.77 0 0 1-1.38.9c-.423.166-1.057.356-2.227.412-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.804-.246-2.227-.412a3.77 3.77 0 0 1-1.38-.9 3.77 3.77 0 0 1-.9-1.38c-.166-.423-.356-1.057-.412-2.227C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.246-1.804.412-2.227.218-.56.48-.96.9-1.38.42-.42.82-.683 1.38-.9.423-.166 1.057-.356 2.227-.412C8.416 2.212 8.8 2.2 12 2.2zM12 0C8.74 0 8.333.014 7.052.072 5.77.13 4.82.346 4.01.66a5.99 5.99 0 0 0-2.17 1.42A5.99 5.99 0 0 0 .66 4.01c-.314.81-.53 1.76-.588 3.042C.014 8.333 0 8.74 0 12c0 3.26.014 3.667.072 4.948.058 1.282.274 2.232.588 3.042a5.99 5.99 0 0 0 1.42 2.17 5.99 5.99 0 0 0 2.17 1.42c.81.314 1.76.53 3.042.588C8.333 23.986 8.74 24 12 24c3.26 0 3.667-.014 4.948-.072 1.282-.058 2.232-.274 3.042-.588a6.17 6.17 0 0 0 3.59-3.59c.314-.81.53-1.76.588-3.042.058-1.281.072-1.688.072-4.948 0-3.26-.014-3.667-.072-4.948-.058-1.282-.274-2.232-.588-3.042a5.99 5.99 0 0 0-1.42-2.17A5.99 5.99 0 0 0 19.99.66c-.81-.314-1.76-.53-3.042-.588C15.667.014 15.26 0 12 0z"
                />
                <path
                  fill="#FFFFFF"
                  cursor="pointer"
                  d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                />
                <circle cx="18.406" cy="5.594" r="1.44" fill="#FFFFFF" />
              </svg>
            </a>

            {/* Tiktok icon */}
            <a
              aria-label="TikTok"
               href="https://www.tiktok.com/@david.devs"
               cursor="pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                cursor="pointer"
              >
                <path
                  fill="#FFFFFF"
                  cursor="pointer"
                  d="M21 8.17c-1.27.08-2.5-.25-3.59-.92a6.64 6.64 0 0 1-3.1-4.02h-3.6v13.55a2.89 2.89 0 1 1-2.49-2.87V10.3a6.44 6.44 0 0 0-.94-.07 6.53 6.53 0 1 0 6.53 6.53V9.1a10.2 10.2 0 0 0 5.19 1.45V8.17z"
                />
              </svg>
            </a>
            {/* Github icon */}
            <a
              aria-label="GitHub"
              href="https://github.com/catalyst000"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>

            {/* Facebook icon */}
            <a
              aria-label="Facebook"
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                cursor="pointer"
              >
                <path
                  fill="#FFFFFF"
                  cursor="pointer"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>
          </Flex>
        </MotionBox>
        <Box
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: "100%", md: "400px" }}
          h="fit-content"
        >
          <MotionBox
            position="relative"
            bg="transparent"
            p="1rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="300px"
            border="2px solid white"
            h="fit-content"
            w="fit-content"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
            }}
          >
            <Image
              alt="David Ugwuzor hero image"
              src="/mypicture.webp"
              loading="eager"
              h="200%"
              w="250px"
              borderBottomLeftRadius="300px"
              borderBottomRightRadius="300px"
              borderRadius="300px"
            />
            <Image
              alt="react logo"
              src="/react-pic.webp"
              position="absolute"
              top="-10px"
              left="100%"
              transform="translateX(-50%)"
              w="40px"
            />
            <Image
              alt="visual studio logo"
              src="/visualstudio-pic.webp"
              position="absolute"
              top="200px"
              left="100%"
              transform="translateX(-50%)"
              w="40px"
            />
            <Image
              alt="wordpress logo"
              src="/wordpress-pic.webp"
              position="absolute"
              top="100px"
              left="0%"
              transform="translateX(-50%)"
              w="40px"
            />
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
