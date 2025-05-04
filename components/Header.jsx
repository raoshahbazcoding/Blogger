import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const Header = () => {
  return (
    <>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        {/* This Is MAin LOGO AND BUTTON */}
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            width={280}
            alt="LOGO"
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} />
          </button>
        </div>

        {/* h1 And Paragraph */}
        <div className="text-center my-8 ">
          <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
          <p className="mt-10 max-w-[750px] m-auto text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam enim nemo laboriosam voluptates officiis dolorem non atque
            aliquam autem eaque, consequuntur repudiandae nam aspernatur,
            possimus fugit unde est quam.
          </p>
          <hr className="mt-10" />

          {/* News Latter */}
          <h3 className="text-2xl sm:text-3xl font-medium mt-10">
            News Latter
          </h3>
          <form
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 shadow-[7px_7px_0px_#000000] mx-auto mt-10 border border-black "
            action=""
          >
            <input
              type="email"
              placeholder="Enter Your Email "
              className="pl-4 outline-none"
            />
            <button
              className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
