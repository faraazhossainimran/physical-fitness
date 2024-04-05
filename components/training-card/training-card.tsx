import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const TrainingCard = ({ trainingDetail }: TrainingProps) => {
  return (
    <div className="">
      <Card>
        <CardHeader className="p-2 relative">
          <div className="">
            <Image
              className="absolute top-40 right-72"
              // layout="responsive"
              width={42}
              height={42}
              alt="play button"
              src={"https://i.ibb.co/q545tD4/Vector.png"}
            ></Image>
          </div>
          <div className="absolute right-4 top-4">
            <CiHeart size={"28px"} className="text-white mt-2" />
          </div>
          <div className="absolute right-4 top-10">
            <IoShareSocial size={"28px"} className="mt-5 text-white" />
          </div>
          <Image
            width={"430"}
            height={"430"}
            src={trainingDetail?.imageUrl}
            alt="Admission going on"
            layout="responsive"
          ></Image>
          <div className="flex justify-between">
            <CardTitle className="uppercase text-2xl mt-4">
              {trainingDetail.trainingTitle}
            </CardTitle>
            <p className="pt-4">HD 6:00</p>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <p>{trainingDetail.description}</p>
        </CardContent>
        <CardFooter className="p-3 flex">
          <h3 className="text-2xl text-green-800">{trainingDetail.price}</h3>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrainingCard;
