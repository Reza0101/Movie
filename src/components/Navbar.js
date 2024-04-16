 import React, { useCallback, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import { User } from "iconsax-react";
// import { Link } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showHamburgerMenu = () => {
        setShowMenu(true);
    };

    const closeMenue = e => {
        // e.stopPropagation()
        setShowMenu(false)
    }

    return (
        <div className="w-full py-1 px-1 md:px-6 md:py-2 overflow-hidden">
            <div className="flex p-3 md:p-0 items-center md:items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center gap-5">
                    <img
                        className="w-[60px]"
                        src="./images/logo-phone.png"
                        alt=""
                    />
                    <div 
                    onClick={closeMenue}
                    className={`${showMenu && 'w-[100%] z-40 closeMenu h-[100vh] absolute top-0 left-0'}`}>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-center z-50 gap-10 text-white text-[14px] flex-col md:flex-row  transition duration-300 md:ml-6 ${
                                showMenu ? "showMenu" : "hiddenMenu"
                            }`}>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">Home</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">Movie</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">Series</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">Tv</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">News</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">About Us</p>
                            <p className="cursor-pointer hover:text-red-500 duration-300 transition">Contact</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-white ">
                    <SearchNormal1
                        className="cursor-pointer transition duration-300 hover:text-red-500"
                        size="19"
                    />
                    <User
                        className="cursor-pointer transition duration-300 hover:text-red-500"
                        size="19"
                    />
                    <HambergerMenu
                        onClick={showHamburgerMenu}
                        className="cursor-pointer md:hidden transition duration-300 hover:text-red-500"
                        size="25"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
