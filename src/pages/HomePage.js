import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <Card
        className="flex flex-col items-center py-[8rem] sm:py-14 xs:py-4"
        color="transparent"
        shadow={false}
      >
        <div className="bg-[#ffffffe3] p-20 rounded-3xl">
          <Typography
            className="text-8xl font-bold pb-4 border-b-4 border-solid border-b-black"
            color="blue-gray"
          >
            Welcome to <span>TECH TASK</span>
          </Typography>
          <Typography
            className="flex items-center justify-center font-light text-[34.8px] mt-4"
            color="blue-gray"
          >
            A web platform where you can monitor all the task of all your
            employees
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
