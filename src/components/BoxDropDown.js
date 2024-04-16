import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const BoxDropDown = ({ icon, img, title, children }) => {
    return (

        <div className="box-drop-dow">
            <Menu>
                <MenuButton
                    className="flex w-52 rounded-md p-3 bg-stone-800"
                    as={Button}
                    color="white"
                    _hover={{bg: 'rgba(255, 255, 255, 0.02'}}
                    _active={{bg: 'rgba(255, 255, 255, 0.02)'}}
                    bg="rgba(255, 255, 255, 0.02"
                    rightIcon={<ChevronDownIcon />}>
                    <div className="flex items-center">
                        {icon ? icon : <img src={img} />}
                        <p className="box">{title}</p>
                    </div>
                </MenuButton>
                <MenuList className="w-52" bg="#121212" px="5px" py="2px" border="none">
                    {children.map((item) => (
                        <MenuItem
                            key={crypto.randomUUID()}
                            bg="rgba(255, 255, 255, 0.02)"
                            color="white"
                            className="my-2 rounded-[8px] hover:border text-center hover:border-red-800 duration-300 transition border-black"
                            transition="all 0.2s"
                            minH="40px">
                            <p className="text-center w-full">{item}</p>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    );
};

export default BoxDropDown;
