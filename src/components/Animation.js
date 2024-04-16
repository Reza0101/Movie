import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const animation = [
    {
        id: 1,
        img: "./images/recommend1",
        videoType: ["Comedy", "Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 2,
        img: "./images/recommend2",
        videoType: ["Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 3,
        img: "./images/recommend3",
        videoType: ["Drama", "War & Politics"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 4,
        img: "./images/recommend4",
        videoType: ["Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 5,
        img: "./images/recommend5",
        videoType: ["Comedy", "drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 6,
        img: "./images/recommend6",
        videoType: ["Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 7,
        img: "./images/recommend7",
        videoType: ["Crime", "Mystery"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 8,
        img: "./images/recommend8",
        videoType: ["Comedy", "Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 9,
        img: "./images/recommend9",
        videoType: ["Action &amp; Adventure", "Sci-Fi & Fantasy", "Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 10,
        img: "./images/recommend10",
        videoType: ["Drama"],
        like: false,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
    {
        id: 11,
        img: "./images/recommend10",
        videoType: ["Drama", "Mystery"],
        like: true,
        description: 'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.'
    },
];

export default function Animation() {
    return (
        <>
            <h1 className="text-white text-xl font-bold my-5">Animation</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    576: {
                        slidesPerView: 3,
                    },
                    868: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
                className="mySwiper text-white h-[350px] w-[100%]">
                {animation.map((item) => (
                    <div key={crypto.randomUUID()}>
                        <SwiperSlide key={crypto.randomUUID()} className="h-[300px] mx-auto w-fit">
                            <div
                                className="w-[170px] relative z-10 group   transition mx-auto h-[250px] bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${item.img}.png)`,
                                }}>
                                <div className="w-[170px] h-[250px] bg-black opacity-[0.5] sticky top-0 z-20 hidden group-hover:block"></div>
                                <div className="m-2 absolute top-0 z-50 hidden rounded-full w-fit flex-wrap  px-3 text-[12px] group-hover:flex gap-2  py-[2px] text-white">
                                    {item.videoType.map((e) => (
                                        <p key={crypto.randomUUID()} className="bg-white rounded-[8px] text-black py-1 px-2">
                                            {e}
                                        </p>
                                    ))}
                                </div>
                                <p className="absolute z-50 bottom-3 hidden group-hover:block text-white">
                                <p className="line-clamp-6 text-xs text-center px-4">

                                    {item.description}
                                </p>
                                </p>
                            </div>
                            <div className="flex ml-2 sm:ml-0 justify-between mt-2 items-center w-[170px]">
                                <div>
                                    <AiOutlineHeart className="cursor-pointer text-red-500 text-xl" />
                                </div>
                                <p>{item.date}</p>
                                <IoIosArrowForward className="text-red-500 text-xl cursor-pointer hover:text-black hover:bg-red-500 transition duration-300 rounded" />
                            </div>
                            <p className="text-center text-sm py-4">{item.name}</p>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
