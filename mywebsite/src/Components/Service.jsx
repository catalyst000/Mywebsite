import { Box, Text, VStack } from '@chakra-ui/react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';


const Service = () => {

  const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }, // delay between children
  },
};

// Child variant
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
  const MotionBox = motion.create(Box);
    const ref = useRef(null);
  const inView = useInView(ref, { once: true });
      const services = [
  {
     icon: (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
    desc: "Modern, user-focused UI designs that convert visitors into customers."
  },









  
  {    
     icon: (
<svg
  viewBox="0 0 24 24"
  width="100"
  height="100"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
>
  <rect
    x="2"
    y="3"
    width="20"
    height="14"
    rx="2"
    stroke="blue"
    strokeWidth="1.5"
  />
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
    desc: "Fast, scalable, and responsive websites built with clean code."
  },
  { 
        icon: (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="6" stroke="blue" strokeWidth="1.5" />
    <line x1="14" y1="14" x2="20" y2="20" stroke="blue" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 10l3-3 3 3M10 7v6" stroke="blue"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>


    ),
    
    title: "SEO Optimization",
    desc: "Search-engine-friendly structure to improve visibility and ranking."
  },
   {
        icon: (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  
    <circle cx="12" cy="12" r="6" stroke="blue" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" stroke="blue" strokeWidth="2"/>
  
    <line x1="12" y1="4" x2="12" y2="6" stroke="blue"strokeWidth="2"/>
    <line x1="12" y1="18" x2="12" y2="20" stroke="blue" strokeWidth="2"/>
    <line x1="4" y1="12" x2="6" y2="12" stroke="blue" strokeWidth="2"/>
    <line x1="18" y1="12" x2="20" y2="12" stroke="blue" strokeWidth="2"/>
    <line x1="5.5" y1="5.5" x2="7" y2="7" stroke="blue" strokeWidth="2"/>
    <line x1="17" y1="17" x2="18.5" y2="18.5" stroke="blue" strokeWidth="2"/>
    <line x1="5.5" y1="18.5" x2="7" y2="17" stroke="blue" strokeWidth="2"/>
    <line x1="17" y1="7" x2="18.5" y2="5.5" stroke="blue"strokeWidth="2"/>


    <circle cx="18" cy="6" r="2.5" stroke="blue" strokeWidth="2"/>
    <circle cx="18" cy="6" r="1" stroke="blue" strokeWidth="2"/>

    <line x1="18" y1="3.5" x2="18" y2="4.5" stroke="blue" strokeWidth="2"/>
    <line x1="18" y1="7.5" x2="18" y2="8.5" stroke="blue" strokeWidth="2"/>
    <line x1="15.5" y1="6" x2="16.5" y2="6" stroke="blue" strokeWidth="2"/>
    <line x1="19.5" y1="6" x2="20.5" y2="6" stroke="blue" strokeWidth="2"/>
  </svg>


    ),
    
    title: "Maintenance and Support",
    desc: "Complete overhaul of your website's design and user experience."
  }
];
  return (
   <Box w="100%" h="fit-content" display="flex"   bg="white" flexDirection="column" >
<Text
  as="h2"
  fontSize="3xl"
  fontWeight="bold"
  textAlign="center"
>
  Our Services
</Text>



<Box
   
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap="24px"
      p="0.5rem"
    >
      {services.map((service, index) => (
        <MotionBox
           ref={ref}
          key={index}
          p="0.2rem"
          bg="linear-gradient(135deg, #60A5FA, #6366F1, #A855F7)"
          _hover={{ transform: "translateY(-6px)" }} 
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          initial={{ x: -150, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            delay: index * 0.3, // stagger per item
          }}
        >
          <Box textAlign="center" p="24px" h="100%" bg="white">
            <Box h="100px" w="100%" bg="transparent">{service.icon}</Box>
            <Text fontSize="xl" fontWeight="bold">
              {service.title}
            </Text>
            <Text mt="8px" opacity="0.8">
              {service.desc}
            </Text>
          </Box>
        </MotionBox>
      ))}
    </Box>

    
   </Box>
  )
}

export default Service
