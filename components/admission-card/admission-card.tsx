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
import Button from "../shared/button/button";
import { IoBagCheck } from "react-icons/io5";

import { IoShareSocial } from "react-icons/io5";
const AdmissionCard = () => {
  return (
    <div className="md:w-[400px] container mx-auto">
      <Card>
        <CardHeader className="p-3">
          <Image layout="responsive" width={"320"} height={"320"} src={"https://i.ibb.co/hdN1c3r/Frame-1068-1.png"} alt="Admission going on"></Image>
        <div className="flex justify-between">
        <CardTitle className="uppercase text-2xl mt-4">Shito-Ryu karate</CardTitle>
          <IoShareSocial size={"24px"} className="mt-[22px]"/>
        </div>
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-xl text-blue pb-4">BDT. 4,500</p>
          <p className="text-md">Next Class starts at 12th March, 2024</p>
          <p className="text-[#FF0000] font-bold text-xl mt-4">Admission Going on</p>
        </CardContent>
        <CardFooter className="p-3 flex justify-end">
          <Button btnText={"Enroll Now"} icon={<IoBagCheck />}></Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdmissionCard;
