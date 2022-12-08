import React from "react";


import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from "react-icons/bs";

import { Flex, Box } from "@chakra-ui/react"


const shortenAddress = (address: string | any[]) => 
`${address.slice(0, 5)}...${
    address.slice(address.length - 5)
}`;

//const nbCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-600 text-sm font-light text-white";

const nbStyles = ["color=black"];

const ethCard = () =>{
    return (
        <Flex className="eth">
            <Flex className="eth-card">
                <Flex>
                    <Box>
                        <SiEthereum fontSize="21" color="#fff" />
                    </Box>
                    <BsInfoCircle fontSize={17} color="#fff" />
                </Flex>
                <Flex>
                    <p className="acnt">
                        Account Number
                    </p>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ethCard;