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
import { IoBagCheck } from "react-icons/io5";
import Button from "../shared/button/button";
import { IoShareSocial } from "react-icons/io5";
const TrainingCard = ({ trainingDetail }: TrainingProps) => {
  return (
    <div className="">
      <Card>
        <CardHeader className="p-2">
          <Image
            width={"430"}
            height={"430"}
            src={trainingDetail?.imageUrl}
            alt="Admission going on"
          ></Image>
          <div className="flex justify-between">
            <CardTitle className="uppercase text-2xl mt-4">
              {trainingDetail.trainingTitle}
            </CardTitle>
            <IoShareSocial size={"24px"} className="mt-5" />
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <p>BDT. 4,500</p>
          <p>Next Class starts at 12th March, 2024</p>
          <p>Admission Going on</p>
        </CardContent>
        <CardFooter className="p-3 flex">
            <h3 className="text-2xl text-green-800">{trainingDetail.price}</h3>
          {/* <Button btnText={"Enroll Now"} icon={<IoBagCheck />}></Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrainingCard;
