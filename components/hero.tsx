import React from "react";

import Image from "next/image";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import robot from "./assets/images/robot.png";

const Hero = () => {
  const color = useColorModeValue("gray.300", "gray.800");

  return (
    <Flex
      className="container main"
      w={["100%", "100%"]}
      h="100vh"
      py="15%"
      flex="column"
      px={1}
      bgGradient="radial(at 70% 86%,, heroGradientStart, heroGradientEnd)"
      maxW="100%"
      flexDir={["column", "column", "row"]}
    >
      <Flex>
        <Flex
          className="sidebar-items"
          w={["100%", "100%", "100%", "50%", "50%"]}
          flexDir="column"
          alignItems="center"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Heading
            size="xl"
            letterSpacing="regular"
            className="text-gradient-heading"
          >
            The Next <br />
            <Flex display="inline-flex" className="text-hero text-gradient">
              Generational User Interface for <br /> Your NextJs Web Project
            </Flex>
          </Heading>
        </Flex>
        <Flex
        
          flexDirection={["row", "row", "row", "row"]}
          color="gray.300"
          w={["100%", "100%", "100%", "50%", "50%"]}
          p="0"
          flexDir="row"
        >
          <Flex letterSpacing="regular" className="text" fontSize="md">
            <Text color={color} fontWeight="400">
                Welcome! Lets get started!
                We have a wide variety of Ui/Ux yet to be added...
                Check out our Dashboard
                
            </Text>
          </Flex>
          <Flex alignSelf="center" alignItems="center" justifyContent="center">
            <Image
              src={robot}
              alt="billing"
              className="img"
              width="500"
              height="250"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
