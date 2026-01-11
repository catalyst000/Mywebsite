import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const Questions = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);
  const [isRotated3, setIsRotated3] = useState(false);
  const [isRotated4, setIsRotated4] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated); // toggle the state
  };
  const handleClick2 = () => {
    setIsRotated2(!isRotated2); // toggle the state
  };
  const handleClick3 = () => {
    setIsRotated3(!isRotated3); // toggle the state
  };
  const handleClick4 = () => {
    setIsRotated4(!isRotated4); // toggle the state
  };
  return (
    <Box as="section" w="100%" mx="auto" my="10" bg="white">
      <Text as="h2" fontSize="3xl" fontWeight="bold" mb="6" textAlign="center">
        Frequently Asked Questions
      </Text>

      <Accordion allowMultiple>
        {/* Question 1 */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton aria-expanded={isRotated}>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="semibold"
                  color="blue.300"
                >
                  What do you do?
                </Box>
                <FaAngleDown
                  aria-label="Toggle answer"
                  cursor="pointer"
                  onClick={handleClick}
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
                    cursor: "pointer",
                  }}
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontFamily="'Open Sans', sans-serif">
              <Text as="p">
                I design and build modern, responsive websites that focus on
                performance, usability, and clean user experience.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </MotionBox>

        {/* Question 2 */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton aria-expanded={isRotated2}>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="semibold"
                  color="blue.300"
                >
                  Do you provide support after the website is done?
                </Box>
                <FaAngleDown
                  onClick={handleClick2}
                  aria-label="Toggle answer"
                  cursor="pointer"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: isRotated2 ? "rotate(180deg)" : "rotate(0deg)",
                    cursor: "pointer",
                  }}
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontFamily="'Open Sans', sans-serif">
              <Text as="p">
                Yes! I provide ongoing support after your website is completed
                to ensure everything runs smoothly. Minor guidance and bug fixes
                are included, and additional updates or larger changes can be
                arranged for an extra fee.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </MotionBox>

        {/* Question 3 */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton aria-expanded={isRotated3}>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="semibold"
                  color="blue.300"
                >
                  Can you work with existing designs?
                </Box>
                <FaAngleDown
                  onClick={handleClick3}
                  aria-label="Toggle answer"
                  cursor="pointer"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: isRotated3 ? "rotate(180deg)" : "rotate(0deg)",
                    cursor: "pointer",
                  }}
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontFamily="'Open Sans', sans-serif">
              <Text as="p">
                Yes! I can convert designs from tools like Figma or Adobe XD
                into fully functional, pixel-perfect websites.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </MotionBox>

        {/* Question 4 */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton aria-expanded={isRotated4}>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="semibold"
                  color="blue.300"
                >
                  How long does a typical project take?
                </Box>
                <FaAngleDown
                  onClick={handleClick4}
                  aria-label="Toggle answer"
                  cursor="pointer"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: isRotated4 ? "rotate(180deg)" : "rotate(0deg)",
                    cursor: "pointer",
                  }}
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontFamily="'Open Sans', sans-serif">
              <Text as="p">
                Most projects take between 3 to 14 days, depending on
                complexity.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </MotionBox>
      </Accordion>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What do you do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I design and build modern, responsive websites that focus on performance, usability, and clean user experience."
          }
        },
        {
          "@type": "Question",
          name: "Do you provide support after the website is done?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! I provide ongoing support after your website is completed to ensure everything runs smoothly. Minor guidance and bug fixes are included, and additional updates or larger changes can be arranged for an extra fee."
          }
        },
        {
          "@type": "Question",
          name: "Can you work with existing designs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! I can convert designs from tools like Figma or Adobe XD into fully functional, pixel-perfect websites."
          }
        },
        {
          "@type": "Question",
          name: "How long does a typical project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects take between 3 to 14 days, depending on complexity."
          }
        }
      ]
    })
  }}
/>

    </Box>
  
  );
};

export default Questions;
