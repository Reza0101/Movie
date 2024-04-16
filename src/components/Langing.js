import React from "react";

const Langing = () => {
    return (
        <div className="mt-[22px]">
            <div className="mx-auto landing w-full">
                <div className="flex flex-col mx-auto max-w-6xl md:flex-row md:items-center gap-5 md:justify-between w-full">
                    <div className="text-white">
                        <p className="text-[30px] md:text-[48px] font-bold">
                            Lets Make Your
                        </p>
                        <p className="text-[30px] md:text-[48px] font-bold">
                            Own Cinema
                        </p>
                        <p className="pt-2">
                            You can still enjoy the latest movies and <br />{" "}
                            other movies online and at a lower price
                        </p>
                        <div className="flex items-center gap-5 mt-4">
                            <button className="text-white bg-red-500 px-[32px] py-[14px] md:py-[8px] md:px-[48px] border transition duration-300 hover:bg-transparent text-[14px] hover:border border-red-500">
                                Get Start
                            </button>
                            <button className="border text-[14px] border-red-500 md:py-[8px] md:px-[32px] px-[30px] py-[14px]">
                                More
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center justify-center md:mr-5 w-[252px] md:w-[300px] h-[252px] bg-black-rgba relative mb-14 mt-8">
                        <div className="bg-red-500 h-[2px] w-[252px] absolute -left-[30px] top-[20px] opacity-[0.5]"></div>
                        <div className="bg-red-500 h-[252px] w-[2px] absolute left-[20px] -top-[20px] opacity-[0.5]"></div>
                        <div className="p-9 flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white">
                                <img
                                    src="./images/m.png"
                                    className="w-[48px] fill-white text-white"
                                    alt=""
                                />
                                <div className="opacity-[0.5]">
                                    <p>10.000 +</p>
                                    <p>Movie Choice</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <img
                                    src="./images/nn.png"
                                    className="w-[48px] fill-white"
                                    alt=""
                                />
                                <p className="opacity-[0.5]">Best Movies</p>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <img
                                    src="./images/nnn.png"
                                    className="w-[48px] fill-white text-[white]"
                                    alt=""
                                />
                                <div className="opacity-[0.5]">
                                    <p>800 +</p>
                                    <p>Series Choice</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-red-500 h-[252px] w-[2px] -bottom-[40px] right-[20px] opacity-[0.5] absolute"></div>
                        <div className="bg-red-500 opacity-[0.5] h-[2px] w-[252px] absolute -bottom-[10px] -right-[30px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Langing;
