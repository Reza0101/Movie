import React, { useState } from "react";
import BoxDropDown from "../components/BoxDropDown";
import BoxLanding from "../components/BoxLanding";
import { AiOutlineLike } from "react-icons/ai";
import SliderMovie from "../components/SliderMovie";
import RecommendMovie from "../components/RecommendMovie";
import TopTenMovies from "../components/ToTenMovies";
import Animation from "../components/Animation";
import AboutUs from "../components/AboutUs";
import TsSeriesC from "../components/TsSeriesC";

const Index = () => {
    const itemsOne = [
        {
            id: 1,
            title: "Science fiction",
            text: "800+ Movies",
            icon: "./images/8.png",
        },
        {
            id: 2,
            title: "Classic",
            text: "750+ Movies",
            icon: "./images/6.png",
        },
        { id: 3, title: "Horror", text: "680+ Movies", icon: "./images/4.png" },
        {
            id: 4,
            title: "Mystery",
            text: "730+ Movies",
            icon: "./images/2.png",
        },
    ];

    const itemsTow = [
        {
            id: 1,
            title: "Musical",
            text: "550+ Movies",
            icon: "./images/7.png",
        },
        {
            id: 2,
            title: "Romance",
            text: "920+ Movies",
            icon: "./images/5.png",
        },
        { id: 3, title: "War", text: "880+ Movies", icon: "./images/3.png" },
        {
            id: 4,
            title: "Western",
            text: "700+ Movies",
            icon: "./images/1.png",
        },
    ];

    const dropDownList = [
        {
            id: 1,
            title: "Sort by Year",
            img: "./images/shop.png",
            children: ["2023-2022", "2022-2021", "2021-2020"],
        },
        {
            id: 2,
            title: "Sort by Genre",
            img: "./images/item1.png",
            children: ["Action", "Adventure", "Comedy"],
        },
        {
            id: 3,
            title: "Sort by Rating",
            img: "./images/item2.png",
            children: ["10-5", "5-0"],
        },
        {
            id: 4,
            title: "Sort by Vote",
            icon: <AiOutlineLike className="text-red-800 text-[23px] ml-3" />,
            children: ["1000", "900", "800", "700", "600"],
        },
    ];

    const listFilterMovie = [
        {id: 1, text: 'All'},
        {id: 2, text: 'Genre'},
        {id: 3, text: 'Popular'},
        {id: 4, text: 'Recommended'},
        {id: 5, text: 'Series'},
        {id: 6, text: 'TopTen'},
        {id: 7, text: 'Animation'},
        {id: 8, text: 'Archive'},

    ];

    const hotMovie = [
        {
            id: 1,
            date: "2023",
            text: ["The Last Kingdom:", "Seven Kings Must Die"],
            img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00349309-ynqvrxxagk-portrait.jpg",
        },
        {
            id: 2,
            date: "2022",
            text: ["65", ""],
            img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00349309-ynqvrxxagk-portrait.jpg",
        },
        {
            id: 3,
            date: "2020",
            text: ["none", ""],
            img: "https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg",
        },
    ];

    const [itemActiveFilterMovie, setItemActiveFilterMovie] = useState("All");

    return (
        <>
            <div className="bg-stone-900 p-5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-5 lg:gap-y-10 md:flex-col justify-around">
                        <div className="grid grid-rows-4 grid-cols-1 gap-5 sm:grid-rows-2 sm:grid-cols-2 lg:gap-14 md:grid-cols-4 md:grid-rows-1">
                            {itemsOne.map((item) => (
                                <BoxLanding {...item} key={crypto.randomUUID()} />
                            ))}
                        </div>{" "}
                        <div className="grid grid-rows-4 grid-cols-1 gap-5 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-1 lg:gap-14">
                            {itemsTow.map((item) => (
                                <BoxLanding {...item} key={crypto.randomUUID()} />
                            ))}
                        </div>
                    </div>

                    <div className="drop-down-container  scroll-bar overflow-y-visible rounded-[8px] mt-10 mx-auto h-[80px] w-full flex items-center justify-center">
                        <div className="flex gap-5 overflow-x-scroll md:overflow-x-hidden nemidonam md:justify-around w-full mx-5">
                            {dropDownList.map((item) => (
                                <BoxDropDown key={crypto.randomUUID()} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className=" flex items-center scroll-bar md:overflow-x-hidden overflow-y-hidden  gap-2 p-2 w-[95%] overflow-scroll mt-10 text-white">
                        {listFilterMovie.map((item) => (
                            <p
                                key={item.id}
                                onClick={() => setItemActiveFilterMovie(item.text)}
                                className={`active flex items-center justify-center cursor-pointer border-transparent hover:border hover:border-red-500 py-[5px] px-[24px] border rounded-[40px] text-center h-[34px] ${
                                    item.text === itemActiveFilterMovie
                                        ? "bg-red-500"
                                        : ""
                                }`}>
                                {item.text}
                            </p>
                        ))}
                    </div>

                    <SliderMovie data={hotMovie} title="Hot Movie" />
                    <RecommendMovie />

                    {/* Banner one */}

                    <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                        <img
                            src="./images/banner 1.png"
                            className="h-[200px] md:h-[300px] md:w-2/3"
                            alt=""
                        />
                        <img
                            src="./images/banner 2.png"
                            className="h-[200px] md:h-[300px] md:w-1/3"
                            alt=""
                        />
                    </div>

                    {/* Banner one */}

                    <SliderMovie data={hotMovie} title="New Movie" />
                    <TsSeriesC />
                    {/* <TopTenMovies /> */}

                    {/* Banner tow */}
                    <div className="flex flex-col md:flex-row w-full my-5 gap-6">
                        <img
                            src="./images/banner3.png"
                            className="w-full md:h-[300px] md:w-1/3 h-[200px]"
                            alt=""
                        />
                        <img
                            src="./images/banner 4.png"
                            className="w-full md:h-[300px] md:w-2/3 h-[200px]"
                            alt=""
                        />
                    </div>
                    {/* Banner tow */}

                    {/* <Animation /> */}

                    <div className="flex justify-center items-center gap-3">
                        <img src="./images/icon-best.png" alt="" />
                        <p className="text-white font-bold text-2xl">
                            Best Features
                        </p>
                    </div>
                    <div className=" max-w-[845px] mx-auto">
                        <p className="text-white text-center text-[20px] my-5">
                            Experience the excitement of cinema from the comfort
                            of your own screen, with the best features all in
                            one place!
                        </p>
                    </div>

                    <div className="flex items-center mt-10 flex-col md:flex-row gap-5 justify-between">
                        <div className="flex items-start text-white">
                            <img
                                className="mr-5"
                                src="./images/33.png"
                                alt=""
                            />
                            <div>
                                <p className="text-2xl font-bold">
                                    Official Movies
                                </p>
                                <p className="md:w-[231px] w-[280px]">
                                    Experience the legitimacy, quality, and
                                    magic of Official Movies
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start text-white">
                            <img
                                className="mr-5"
                                src="./images/22.png"
                                alt=""
                            />
                            <div>
                                <p className="text-2xl font-bold">
                                    Best Choose
                                </p>
                                <p className="md:w-[231px] w-[280px]">
                                    Find Your Perfect Match with Our Varied
                                    Movie Selection
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start text-white">
                            <img
                                className="mr-5"
                                src="./images/11.png"
                                alt=""
                            />
                            <div>
                                <p className="text-2xl font-bold">
                                    Greatest Archive
                                </p>
                                <p className="md:w-[231px] w-[280px]">
                                    Unlock a World of Cinematic Treasures with
                                    Our Great Movie Archive
                                </p>
                            </div>
                        </div>
                    </div>


                    <AboutUs />
                </div>
            </div>
        </>
    );
};

export default Index;
