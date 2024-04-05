import Image from "next/image";
import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdPlayCircle } from "react-icons/io";

const VideoPlayer = () => {
  return (
    <div>
      <div >
        <div className="relative">
        <div>
        <Image
          src={"https://i.ibb.co/RDYbzyC/Rectangle-283.png"}
          alt="video player"
          layout="responsive"
          width={"240"}
          height={"240"}
          className="z-20"
        ></Image>
        </div>
        <div className="rounded-b-3xl absolute bottom-0 border-t-[4px] w-full pt-4 bg-[#26235B] bg-opacity-40">
          <div className="flex justify-between mb-4 mx-8">
            <div className="flex ">
            <Image width={"24"} height={"24"} className="mr-6" src={"https://i.ibb.co/tqP5vNb/Group-241.png"} alt="player button"></Image>
            <Image width={"24"} height={"24"} className="mr-6" src={"https://i.ibb.co/8bZSqKc/Play-and-pause-button.png"} alt="player button"></Image>
            
            <Image width={"24"} height={"24"} className="mr-6" src={"https://i.ibb.co/b1BX4F5/Group-242.png"} alt="player button"></Image>
            </div>
            <div className="flex">
            <Image width={"24"} height={"24"} className="-mr-4" src={"https://i.ibb.co/pPMm2S6/Play-button.png"} alt="player button"></Image>
            <Image width={"38"} height={"24"} className="mr-6" src={"https://i.ibb.co/Z6QNX5n/Rectangle-292.png"} alt="player button"></Image>
            <Image width={"24"} height={"24"} className="mr-6" src={"https://i.ibb.co/LpJMd8V/Settings.png"} alt="player button"></Image>
            <Image width={"24"} height={"24"} className="mr-6" src={"https://i.ibb.co/588HFK7/Scalability.png"} alt="player button"></Image>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#26235B] w-full h-full top-0 bg-opacity-40 rounded-3xl">
          {/* <IoMdPlayCircle size={140} className="absolute top-1/3 right-1/2 text-yellow"/> */}
          <img className="w-12 md:w-36 absolute top-6 md:top-72 left-1/2 text-yellow" src={"https://i.ibb.co/JzNyWbD/Play-button.png"} alt="play button"></img>
        </div>
        </div>
        <div className="flex mt-8 justify-between">
          <div className="flex">
            <h3 className="md:text-3xl mr-6">DMA Training 2 </h3>
            <p className="md:text-xl mt-1">10k Views</p>
          </div>
          <div className="flex">
            <div>
              <CiHeart size={"32px"} className="md:mr-8 mr-2" />
            </div>
            <div>
              <IoShareSocial size={"32px"} />
            </div>{" "}
          </div>
        </div>
        <div className="bg-[#E9E9EF] my-8 py-8 p-4">
          <p className="text-[#6f6f6f]">
            Hey learners, Do you know about Figma? Figma is a very powerful Web
            application that runs online. There are virtually no platform
            boundaries when it comes to using Figma because you can design
            within a web browser or using their desktop application made for
            windows and macs. In this course, you learn how to use Figma for UI
            design and also I can show you many projects and make a perfect
            portfolio with eye-catching Mockup so that you can easily find an
            offline job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
