import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Icons
import { IoIosArrowForward, IoIosArrowDropright } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const topTenMovieData = [
    {
        id: 1,
        img: "./images/topten1.png",
        videoType: ["Comedy", "Drama"],
        name: "Avatar: The Way of Water",
        like: false,
        date: "2023",
        description:
            "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    },
    {
        id: 2,
        img: "./images/topten2.png",
        videoType: ["Drama"],
        name: "Tetris",
        like: false,
        date: "2022",
        description:
            "Jackie Powers will stop at nothing to prevent his son from following him into a life of crime. With his mob employer in pursuit, a chance encounter at a roadside diner charts a new path.",
    },
    {
        id: 3,
        img: "./images/topten3.png",
        videoType: ["Drama", "War & Politics"],
        name: "Shazam! Fury of the Gods",
        like: false,
        date: "2022",
        description:
            "When a professional tutor takes a job at a remote manor, he soon finds himself battling his disturbed student’s obsessions, which threaten to expose his darkest secrets and unravel his carefully crafted persona.",
    },
    {
        id: 4,
        img: "./images/topten4.png",
        videoType: ["Drama"],
        name: "John Wick: Chapter 4",
        like: false,
        date: "2021",
        description:
            "Having grown sick and tired of his centuries as Draculalackey, Renfield finds a new lease on life — and maybe even redemption  when he falls for feisty, perennially angry traffic cop Rebecca Quincy",
    },
];

export default function TopTenMovies() {
    return (
        <>
            <h1 className="text-white text-xl font-bold my-5">
                Top Ten Movies
            </h1>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    868: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper text-white h-[270px]">
                {topTenMovieData.map((item) => (
                    <div key={item.id}>
                        <SwiperSlide className="h-[200px] transition-all mx-auto">
                            <div
                                className="w-full relative z-10 transition-all  duration-300 group  mx-auto h-[200px] bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                }}>
                                <div className="sm:w-[300px] w-full h-[200px] bg-black opacity-[0.5] sticky top-0 z-20 hidden group-hover:block"></div>
                                <div className="m-2 absolute top-0 z-50 hidden rounded-full w-fit flex-wrap  px-3 text-[12px] group-hover:flex gap-2  py-[2px] text-white">
                                    {item.videoType.map((e) => (
                                        <div key={crypto.randomUUID()}>
                                            <p className="bg-slate-300 rounded-[8px] text-black py-1 px-2">
                                                {e}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-2 transition duration-200 absolute bottom-5 z-50 hidden  flex-wrap w-52 px-3 text-[12px] group-hover:block  text-white">
                                    <p className="line-clamp-4">
                                        {item.description}
                                    </p>
                                </p>

                                <div
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                    }}
                                    className=" transition-all bg-center duration-300  w-[67px] bg-cover h-[100px] top-2 absolute right-3 z-50 hidden  px-3 group-hover:block"></div>
                            </div>
                            <div className="flex items-center justify-between my-2">
                                <p className="text-center text-sm py-4">
                                    {item.name}
                                </p>
                                <img
                                    src="./images/play.png"
                                    className="w-10"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
                <SwiperSlide className="text-center flex items-center mt-28 ml-10">
                    <div className="flex items-center gap-2 cursor-pointer">
                        See more
                        <IoIosArrowDropright className="text-red-500 text-xl" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
