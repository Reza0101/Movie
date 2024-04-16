import React from "react";
import {ArrowRight} from 'iconsax-react'

const BoxLanding = ({icon, title, text}) => {
    return (
        <div className="rounded-[6px] bg-[#272320] w-[168px] p-[12px] flex flex-col lg:flex-row lg:w-[244px] justify-between">
            <img className="bg-[#1C1917] p-3 rounded-[4px] mx-auto w-[48px] h-[48px] md:h-[70px] md:w-[70px]" src={icon} alt="" />
            <div className="flex items-end justify-between">
                <div className="text-white pt-1">
                    <p className="text-[14px] md:text-[16px]">{title}</p>
                    <p className="opacity-[0.5]">{text}</p>
                </div>
                <ArrowRight size="20" className="ml-3 hover:scale-150 transition duration-300 cursor-pointer" color="#EF4444"/>
            </div>
        </div>
    );
};

export default BoxLanding;
