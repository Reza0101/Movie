import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";

// Import Swiper styles
import "swiper/css";

export default function SliderMovie({ data, title }) {


    const [video, setVideo] = useState([]);

    useEffect(() => {
        getAnimationData();
    }, []);

    const getAnimationData = () => {
        fetch('https://servermovie.vercel.app/hotmovie', {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) => {
                setVideo(result[0]?.HotMovies);
            });
    };
    return (
        <div className="text-white">
            <h1 className="font-bold text-xl mt-3">{title}</h1>
            <br />
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                watchSlidesProgress={true}
                slidesPerView={1}
                className="mySwiper h-[250px] sm:mx-5">
                {video?.map((movie) => (
                    <div key={crypto.randomUUID()}>
                        <SwiperSlide
                            key={crypto.randomUUID()}
                            className="rounded-[12px] w-[400px] h-[70px]"
                            style={{ backgroundImage: `url(${movie.img})` }}>
                            <p className="p-2">{movie.endDate}</p>
                            <p className="absolute bottom-5 left-3">
                                {movie.name}
                            </p>
                            <TbArrowNarrowRight className="absolute bottom-3 text-[25px] hover:scale-150 transition duration-300 hover:text-white right-3 cursor-pointer" />
                        </SwiperSlide>
                    </div>
                ))}
                <SwiperSlide className="text-center flex items-center mt-28 ml-28">
                    <div className="flex items-center gap-2 cursor-pointer">
                        See more
                        <IoIosArrowDropright className="text-red-500 text-xl" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
