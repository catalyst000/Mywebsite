import React from "react";
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

const MotionBox = motion(Box);

const Questions = React.memo(() => {
  return (
    <Box as="section" w="100%" mx="auto" my="10" bg="white">
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center">
        Frequently Asked Questions
      </Text>

      <Accordion allowMultiple>
        {[
          {
            q: "What do you do?",
            a: "I design and build modern, responsive websites that focus on performance, usability, and clean user experience.",
          },
          {
            q: "Do you provide support after the website is done?",
            a: "Yes! I provide ongoing support after your website is completed to ensure everything runs smoothly.",
          },
          {
            q: "Can you work with existing designs?",
            a: "Yes! I can convert designs from tools like Figma or Adobe XD into fully functional websites.",
          },
          {
            q: "How long does a typical project take?",
            a: "Most projects take between 3 to 14 days, depending on complexity.",
          },
        ].map((item, i) => (
          <MotionBox
            key={item.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="semibold" color="blue.300">
                      {item.q}
                    </Box>
                    <Box
                      as={FaAngleDown}
                      transition="transform 0.3s"
                      transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
                    />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text>{item.a}</Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </MotionBox>
        ))}
      </Accordion>
    </Box>
  );
});

export default Questions;
