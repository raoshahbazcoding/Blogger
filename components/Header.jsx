import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";
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
          <Link href='/admin'>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt=""/>
          </button></Link>
        </div>

        {/* h1 And Paragraph */}
        <div className="text-center my-8 ">
          <h1 className="text-3xl sm:text-5xl font-medium ">Latest Blogs</h1>
          <p className="mt-10 max-w-[750px] m-auto text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam enim nemo laboriosam voluptates officiis dolorem non atque
            aliquam autem eaque, consequuntur repudiandae nam aspernatur,
            possimus fugit unde est quam.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Header;
