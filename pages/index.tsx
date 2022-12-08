import React  from "react";
import type { NextPage } from "next";

import { Flex, Box } from "@chakra-ui/react";
import Container from "../components/Container";

import  Navbar  from "../components/navbar";
import Hero from "../components/hero";


const Index = () => (
  
    <Flex className="container"> 
    <Box> 
    <Navbar/>
    </Box>
    <Hero />
    </Flex>
)

export default Index