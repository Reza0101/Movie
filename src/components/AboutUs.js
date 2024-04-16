import React from "react";

const AboutUs = () => {
    return (
        <div className="text-white mt-16">
            <p className="text-[32px] mb-4 text-center font-bold">About US</p>
            <div className="flex flex-col items-center md:flex-row justify-between md:items-start">
                <div
                    style={{ backgroundColor: `rgba(255, 255, 255, 0.05)` }}
                    className=" w-[350px] text-[14px] md:p-[24px] md:w-[658px] rounded-[8px] p-[16px]">
                    <p>
                        Welcome to our movie website, where you'll find
                        everything you need to know about the latest movies and
                        upcoming releases. We offer an extensive selection of
                        trailers, reviews, and behind-the-scenes content that
                        will keep you informed and entertained.
                    </p>
                </div>
                <img className="my-5" src="./images/ff.png" alt="" />
            </div>
            <div className="flex w-full items-center justify-center md:justify-start">
                <div
                    style={{ backgroundColor: `rgba(255, 255, 255, 0.05)` }}
                    className="w-[350px] text-[14px] md:p-[24px] md:w-[758px] rounded-[8px] p-[16px]">
                    <p className="pb-3">
                        Our website is designed with the user in mind, providing
                        easy navigation and a clean, modern design. You can
                        browse by genre or search for specific titles using our
                        intuitive search function.
                    </p>
                    <p>
                        Once you've found the movie you're interested in, you
                        can read reviews from other users, watch trailers, and
                        get all the information you need to make an informed
                        decision about whether to see it.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center md:flex-row justify-between md:items-start mt-8">
                <img className="my-5" src="./images/ddd.png" alt="" />
                <div
                    style={{ backgroundColor: `rgba(255, 255, 255, 0.05)` }}
                    className=" w-[350px] text-[14px] md:p-[24px] md:w-[658px] rounded-[8px] p-[16px]">
                    <p>
                        We also offer exclusive content and interviews with
                        actors and directors, giving you an inside look at the
                        making of some of your favorite films. Whether you're a
                        casual movie-goer or a die-hard cinephile, our website
                        has something for everyone.
                    </p>
                </div>
            </div>

            <div className="flex w-full items-center justify-center md:justify-end">
                <div
                    style={{ backgroundColor: `rgba(255, 255, 255, 0.05)` }}
                    className="w-[350px] text-[14px] md:p-[24px] md:w-[758px] rounded-[8px] p-[16px]">
                    <p className="pb-3">
                        In addition to our features and content, we offer
                        targeted advertising opportunities for businesses
                        looking to reach our highly engaged audience. Our ad
                        options include display ads, sponsored content, and
                        native advertising, all of which can be customized to
                        fit your brand's unique needs.
                    </p>
                </div>
            </div>

            <div
                style={{ backgroundColor: `rgba(255, 255, 255, 0.05)` }}
                className="mx-auto w-[350px] mt-20 text-[18px] md:p-[24px] md:w-[720px] rounded-[8px] p-[16px]">
                <p>
                    Thank you for choosing our movie website as your go-to
                    source for all things cinema. We're committed to providing
                    the best possible experience for our users, and we hope you
                    enjoy exploring our site!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
