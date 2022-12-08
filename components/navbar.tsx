import React from "react";
import { useState, useEffect } from "react"
import router, { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

//icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSun, BiMoon, BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai';


//chakra_components
import {
    Heading,
    HStack,
    Box,
    useColorMode,
    useColorModeValue,
    IconButton,
    Flex,
    Button
} from '@chakra-ui/react'
import Logo from './assets/images/deffo.png'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    //const colorLog = useColorModeValue("purple", "white")
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (e: { preventDefault: () => void }) =>{
        e.preventDefault();
        if (searchValue) {
            router.push('/search/${searchValue}');
        }
    };
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('gray.300', 'gray.800')


    return (
        <Flex className="navbar container main bt" alignItems="center" position="fixed"
        zIndex="1000"
        >
            <HStack spacing={8} alignItems="center">
                <Link href="/" passHref>
                        <Heading
                            mt={5}
                            ml={10}
                            mb={[25, 50, 100]}
                            fontSize={["2xl", "3xl", "2xl", "2xl", "4xl"]}
                            alignSelf="center"
                            fontFamily="helvetica"
                        className="text-gradient-logo logo"> DEFFO-Dash
                        </Heading>
                </Link>
                <Flex position="fixed" color="#fff"
                    top={4} right={4} align="center">
                        <Flex display={['none', 'none', 'flex', 'flex']}>                            
                        <Link href="/" passHref>
                                <Button
                                variant="ghost"
                                aria-label="home"
                                my={5}
                                width="100%">Home</Button>
                            </Link>

                        <Link href="/dashboard" passHref>
                            <Button
                                variant="ghost"
                                aria-label="dashboard"
                                my={5}
                                width="100%">Dashboard</Button>
                        </Link>

                        <Link href="/about" passHref>
                            <Button 
                                variant="ghost"
                                aria-label="about"
                                my={5}
                                width="100%">About</Button>
                        </Link>

                        <Link href="/contact" passHref>
                            <Button 
                                variant="ghost"
                                aria-label="contact"
                                my={5}
                                width="100%">Contact</Button>
                         </Link>
                        </Flex>

                    <Flex className="flex-darkMode">
                        <IconButton aria-label="Open Menu"
                        size="sm"
                        mr={3}
                        icon={<GiHamburgerMenu />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={() => changeDisplay('flex')}
                        />
                        <IconButton icon={isDark ? <BiMoon fontSize="20px" color="gray.300" /> : <BiSun color="gold" fontSize="20px" />}
                            aria-label="Toggle Theme" ml={2} mr={3} bgColor={color} onClick={toggleColorMode}
                        size="sm"/>
                    </Flex>
                </Flex>

                <Flex width="80vw"
                    bgColor="gray.500"
                    zIndex={20}
                    height="100vh"
                    pos="fixed"
                    top="0"
                    left={[20, 20, 20]}
                    overflowY="auto"
                    flexDir="column"
                    display={display}
                >
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={10}
                            aria-label="Close Menu"
                            size="md"
                            icon={<AiOutlineClose fontSize="26px"/>}
                            bgColor={bg}
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        align="center"
                    >
                        <Link href="/" passHref>
                            <Button
                                variant="ghost"
                                aria-label="home"
                                my={5}
                                w="auto"
                            >
                                Home
                            </Button>
                        </Link>

                        <Link href="/dashboard" passHref>
                            <Button
                                variant="ghost"
                                aria-label="dashboard"
                                my={5}
                                width="100%">Dashboard</Button>
                        </Link>

                        <Link href="/about" passHref>
                            <Button
                                variant="ghost"
                                aria-label="about"
                                my={5}
                                w="auto"
                            >
                                About
                            </Button>
                        </Link>


                        <Link href="/contact" passHref>
                            <Button
                                variant="ghost"
                                aria-label="contact"
                                my={5}
                                w="auto"
                            >
                                Contact Us
                            </Button>
                        </Link>

                    </Flex>
                </Flex>

            </HStack>
        </Flex>
    )
}

export default Navbar