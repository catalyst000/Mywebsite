import { Box } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import "./App.css";
import Service from "./Components/Service";
import { motion } from "framer-motion";
import Ourwork from "./Components/Ourwork";
import Testimonials from "./Components/Testimonials";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box w="100%" bg="blue.100" fontFamily="'Playfair Display', serif">
      <motion.a
        href="https://wa.me/2349013172370"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
        }}
        animate={{
          y: [0, -50, 0],
          scaleX: [1, 1.2, 0.9, 1],
          scaleY: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <svg
          viewBox="0 0 24 24"
          width="60"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#25D366" />
          <path
            fill="white"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.672-1.611-.922-2.206-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.57-.009s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.261.489 1.69.625.71.227 1.357.195 1.868.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347z"
          />
        </svg>
      </motion.a>
      <Hero />
      <Service />
      <Ourwork />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
