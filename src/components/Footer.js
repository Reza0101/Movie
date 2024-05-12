import React from "react";
// Import Icons
import { AiOutlineHeart } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="bg-[#121212]">
            <p className="w-[100%] h-[1px] bg-red-500"></p>
            <div className="text-center p-5 text-white flex items-center gap-1 justify-center">
                <p>Designed with</p>

                <AiOutlineHeart className="text-red-500 text-[22px]" />

                <p className="text-sm md:text-md text-center"
    >By <a className="text-red-500 font-bold" href="https://fatemeweb.vercel.app/en">Fateme Ghafari</a> And Developt By Reza Siahi</p>
            </div>
        </div>
    );
};

export default Footer;
