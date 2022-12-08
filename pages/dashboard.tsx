/* eslint-disable react/no-children-prop */

import React, { useEffect, useState, useContext } from "react";
import router, { useRouter } from 'next/router'
import {
  Flex, Heading,  Avatar,  AvatarGroup,  Text,  Icon,  IconButton,  Table,  Thead,Tbody,Tr,Th,Td,Divider,Link,Box,Button,Input,InputGroup,InputLeftElement,
} from "@chakra-ui/react";
import { FiHome, FiPieChart, FiDollarSign, FiBox, FiCalendar, FiChevronDown, FiChevronUp, FiPlus, FiCreditCard, FiSearch, FiBell,} from "react-icons/fi";
import { SiEthereum, SiBitcoin } from "react-icons/si";
import { BsInfoCircle, BsKeyboardFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import MyChart from "../components/MyChart";
import Navbar from "../components/navbar";
import  shortenAddress  from "../components/shortenAddress";

export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchValue) {
      router.push('/search/${searchValue}');
    }
  };

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "20%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="#12152b"
        color="#fff"
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Flex flexDir="column" as="nav">
            <Heading
              className="text-gradient-logo"
              mt={50}
              ml={2}
              mb={[25, 50, 100]}
              fontSize={["3xl", "3xl", "2xl", "2xl", "3xl"]}
              alignSelf="center"
              fontFamily="Roboto"
              color="#9fc490"
            >
              DEFFO-Dash
            </Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href="/" display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link href="/"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Home</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiCreditCard} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Cards</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Wallet</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" /> 
            <Text textAlign="center">User1110</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex
        className="gradient-bg-footer"
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading color="gray.50" fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            User1110
          </Flex>
        </Heading>
        <Text color="gray.50" fontSize="sm" >
          Balance
        </Text>
        <Text fontWeight="bold" color="gray.400" fontSize="2xl">
          $4,200.20
        </Text>
        <MyChart />
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="lg" color="gray.50" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="small" color="gray.50" ml={4}>
              Apr 2022
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} aria-label={"calender"} />
        </Flex>
        <Flex flexDir="column" color="gray.50">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray.50">
                  <Th>Name of Transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} 
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Ethereum
                        </Heading>
                        <Text fontSize="sm" color="gray.50">
                          May 2, 2022 at 5:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>BlockChain</Td>
                  <Td isNumeric>+$1</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$302
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Facebook
                        </Heading>
                        <Text fontSize="sm" color="gray.50">
                          Jan 02, 2022 at 1:43pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social Media</Td>
                  <Td isNumeric>+$43</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$30
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} 
                        src="data:image/png;base64,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" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Netflix
                        </Heading>
                        <Text fontSize="sm" color="gray.50">
                          May 3, 2022 at 10:20am
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Movies</Td>
                  <Td isNumeric>+$2</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$10
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display == "show" && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} 
                            src="https://img.freepik.com/premium-vector/bitcoin-icon-payment-symbol-cryptocurrency-logo-virtual-currency-exchange-symbol-internet-finance-coins-gold-coin-icon-black-background-design-simple-vector-illustration_545793-755.jpg?w=740" />
                          <Flex flexDir="column">
                            
                            <Heading size="sm" letterSpacing="tight">
                              Bitcoin
                            </Heading>
                            <Text fontSize="sm" color="gray.50">
                              Apr 12, 2021 at 9:40pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Digital Currency</Td>
                      <Td isNumeric>+$22</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$256
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Apple
                            </Heading>
                            <Text fontSize="sm" color="gray.50">
                              Nov 10, 2022 at 2:10pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>IT Company</Td>
                      <Td isNumeric>-$13</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          +$02
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} 
                            src="https://static.vecteezy.com/system/resources/previews/004/567/675/original/binance-logo-cryptocurrency-in-flat-design-free-vector.jpg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Binance
                            </Heading>
                            <Text fontSize="sm" color="gray.50">
                              Apr 17, 2022 at 9:03am
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>BlockChain</Td>
                      <Td isNumeric>+$4</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$112
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />
            <IconButton
              icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => {
                if (display == "show") {
                  changeDisplay("none");
                } else {
                  changeDisplay("show");
                }
              } } aria-label={""}            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w={["100%", "100%", "30%"]}
        className="gradient-bg-footer"
        p="3%"
        flexDir="column"
        overflow="auto"
        minW={[null, null, "300px", "300px", "400px"]}
      >
        <Flex alignContent="center">
          <InputGroup
            bgColor="gray.500"
            mb={4}
            border="none"
            borderColor="transparent"
            borderRadius="18px"
            mr={2}
            pos="relative"
            onSubmit={handleSearch}
          >
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
            type="text"  placeholder="Search" color="white" borderRadius="18px" />
            <Button cursor="pointer" onClick={handleSearch}>
               <BiSearch color="black"  /> 
            </Button>
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="transparent"
            borderRadius="50%"
            p="10px" aria-label={"Notification Bell"}  />
          <Flex
            w={30}
            h={25}
            bgColor="#120149"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            0
          </Flex>
        </Flex>
        <Heading color="gray.50" letterSpacing="tight">My Accounts</Heading>
        {value == 1 && (
          <Box
            className="white-glassmorphism eth-card"
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <SiEthereum fontSize="21" color="#fff" />
                </Flex>
              </Flex>
              <Text mb={4}>{/*{shortenAddress}*/}ETH Address</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="md">
                      Username
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <BsInfoCircle fontSize={20} color="#fff" />
              </Flex>
            </Flex>
          </Box>
        )}
        {value == 2 && (
          <Box
            className="white-glassmorphism"
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #308ad9, #060465)"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $350.00
                  </Text>
                </Flex>
                <Flex align="center">
                  <SiBitcoin fontSize="21" color="#fff" />
                </Flex>
              </Flex>
              <Text mb={4}>BTC Address</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="md">
                    Username
                    </Text>
                    <Text fontSize="lg">9/24</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <BsInfoCircle fontSize={20} color="#fff" />
              </Flex>
            </Flex>
          </Box>
        )}
        {value == 3 && (
          <Box
            className="white-glassmorphism"
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #0f0121, #100d33)"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.50">Current Balance</Text>
                  <Text fontWeight="bold" color="gray.50" fontSize="xl">
                    $2,150.72
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Visa</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 8353</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">
                      Valid Thru
                    </Text>
                    <Text fontSize="lg">11/22</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        <Flex justifyContent="center" mt={2}>
          <IconButton
            icon={<SiEthereum />}
            bgColor={value == 1 ? "gray.800" : "#b2a706"}
            size="xs"
            mx={1}
            onClick={() => changeValue(1)} aria-label={""}          />
          <IconButton
            icon={<SiBitcoin />}
            bgColor={value == 2 ? "gray.800" : "#079aaa"}
            size="xs"
            mx={1}
            onClick={() => changeValue(2)} aria-label={""}          />
          <IconButton
            icon={<FiCreditCard />}
            bgColor={value == 3 ? "gray.800" : "#d920ba"}
            size="xs"
            mx={1}
            onClick={() => changeValue(3)} aria-label={""}          />
        </Flex>
        <Flex flexDir="column" my={4}>
          <Flex justify="space-between" mb={2}>
            <Text color="gray.50">Balance</Text>
            <Text color="gray.50" fontWeight="bold">$140.42</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.50">Credit Limit</Text>
            <Text color="gray.50" fontWeight="bold">$150.00</Text>
          </Flex>
        </Flex>
        
        <Text color="gray.50" mt={10} mb={2}>
          Address
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiCreditCard color="gray.700" />}
          />
          <Input placeholder="Address To..." name="addressTo" type="text" />
        </InputGroup>
        <Text color="gray.50" mt={4} mb={2}>
          Amount
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiDollarSign color="gray.700" />}
          />
          <Input placeholder="Amount" name="amount" type="number" />
        </InputGroup>
        <Text color="gray.50" mt={4} mb={2}>
          Keyword(s)
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BsKeyboardFill color="gray.700" />}
          />
          <Input placeholder="Keyword()" name="keyword" type="text" />
        </InputGroup>

        <Button
          mt={4}
          bgColor="blackAlpha.900"
          color="#fff"
          p={7}
          borderRadius={15}
        >
          Send money
        </Button>
      </Flex>
    </Flex>
  );
}
