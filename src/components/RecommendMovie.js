import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Icons
import { CiPlay1 } from "react-icons/ci";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const recommendMovies = [
    {
        id: 1,
        img: "./images/recommend1",
        rank: "8.1",
        name: "Avatar: The Way of Water",
        description:
            "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    },
    {
        id: 2,
        img: "./images/recommend2",
        rank: "7.5",
        name: "Tetris",
        description:
            "In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain.",
    },
    {
        id: 3,
        img: "./images/recommend3",
        rank: "5.5",
        name: "Shazam! Fury of the Gods",
        description:
            "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off a turn old friends into foes.",
    },
    {
        id: 4,
        img: "./images/recommend4",
        rank: "6.9",
        name: "John Wick: Chapter 4",
        description:
            "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off at turn old friends into foes.",
    },
    {
        id: 5,
        img: "./images/recommend5",
        rank: "7.8",
        name: "65",
        description:
            "While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
    },
    {
        id: 6,
        img: "./images/recommend6",
        rank: "9",
        name: "Chupa",
        description:
            "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy",
    },
    {
        id: 7,
        img: "./images/recommend7",
        rank: "5.8",
        name: "John Wick: Chapter 4",
        description: "An art thief becomes trapped in a New Y to survive.",
    },
    {
        id: 8,
        img: "./images/recommend8",
        rank: "9.2",
        name: "John Wick: Chapter 4",
        description:
            "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the s technology threatens to disrupt the world order.",
    },
    {
        id: 9,
        img: "./images/recommend9",
        rank: "7.5",
        name: "John Wick: Chapter 4",
        description:
            "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggeselp them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
    },
    {
        id: 10,
        img: "./images/recommend10",
        rank: "6.3",
        name: "John Wick",
        description:
            "Paul and Sophie, interns at a mysterious London firm, become steadily aware their employe of magic by bringing modern corporate strategy to ancient magical practices.",
    },
    {
        id: 11,
        img: "./images/recommend10",
        rank: "5.8",
        name: "John Wick: Chapter 4",
        description:
            "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
    },
];

export default function RecommendMovie() {
    const [onHoverVideo, setOnHoverVideo] = useState(false);

    return (
        <>
            <h1 className="text-white text-xl font-bold my-5">Recommend</h1>
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
                className="mySwiper text-white transition-all duration-300 h-[350px] w-[100%]">
                {recommendMovies.map((item) => (
                    <div key={item.id}>
                        <SwiperSlide key={crypto.randomUUID()} className="h-[277px] transition-all duration-300 mx-auto">
                            <div
                                className="w-[170px] relative z-10 group   transition mx-auto h-[270px] bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${item.img}.png)`,
                                }}>
                                <div className="w-[170px] h-[270px] bg-black opacity-[0.8] sticky top-0 z-20 hidden group-hover:block transition-all duration-300"></div>
                                <p className="bg-red-500 m-2 transition-all absolute top-0 z-50 hidden rounded-full w-fit  px-3 text-[12px] group-hover:block  py-[2px] text-white">
                                    {item.rank}
                                </p>
                                <div className="hidden group-hover:block text-[12px] text-center absolute z-40 bottom-2">
                                    <p className="line-clamp-3  px-2 mb-10">
                                        {item.description}
                                    </p>
                                </div>
                                <CiPlay1
                                    className={`absolute hover:text-red-500 bottom-4 right-4 z-50 hidden group-hover:block cursor-pointer transition duration-300 text-xl`}
                                    alt=""
                                />
                            </div>
                            <p className="text-center py-4 ">{item.name}</p>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
