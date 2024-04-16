import React, { useEffect, useRef, useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TsSeriesC() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        getAnimationData();
    }, []);

    const getAnimationData = () => {
        fetch('https://servermovie.vercel.app/movies', {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) => {
                setVideo(result[0]?.TvSeries);
            });
        };
        console.log(video);

    return (
        <>
            <h1 className="text-white text-xl font-bold my-5">Ts Series</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    576: {
                        slidesPerView: 3,
                    },
                    868: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
                className="mySwiper text-white h-[350px] w-[100%]">
                {video?.length ? (
                    video?.map((item) => (
                        <div key={item.id}>
                            <SwiperSlide
                                key={crypto.randomUUID()}
                                className="h-[300px] mx-auto w-[100%]">
                                <div
                                    className="w-[170px] relative z-10 group  transition mx-auto h-[250px] bg-no-repeat bg-cover"
                                    style={{
                                        backgroundImage: `url(${item.img}.png)`,
                                    }}>
                                    <div className="w-[170px] h-[250px] scale-0 group-hover:scale-100 duration-300 bg-black opacity-[0.5] sticky top-0 z-20 hidden group-hover:block"></div>
                                    <div className="m-2 absolute top-0 z-50 hidden rounded-full w-fit flex-wrap  px-3 text-[12px] group-hover:flex gap-2  py-[2px]">
                                        {item.types.map((type) => (
                                            <p className="bg-white rounded-[8px] text-black py-1 px-2 font-bold">
                                                {type}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2 items-center w-[170px] mx-auto">
                                    <div>
                                        <AiOutlineHeart className="cursor-pointer text-red-500 text-xl" />
                                    </div>
                                    <p>
                                        {item.endDate} {item.startDate}
                                    </p>
                                    <IoIosArrowForward className="text-red-500 text-xl cursor-pointer hover:text-black hover:bg-red-500 transition duration-300 rounded" />
                                </div>
                                <p className="text-center text-sm py-4">
                                    {item.name}
                                </p>
                            </SwiperSlide>
                        </div>
                    ))
                ) : (
                    <p>loading</p>
                )}
                : <p>loading</p>
            </Swiper>
        </>
    );
}
