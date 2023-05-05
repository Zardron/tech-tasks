import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
// import {
//   CubeTransparentIcon,
//   UserCircleIcon,
//   CodeBracketSquareIcon,
// } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/solid";
import NavListMenu from "./NavListMenu";
import { getCurrentDate } from "../GetCurrentDate";

// const navListItems = [
//   {
//     label: "Account",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Blocks",
//     icon: CubeTransparentIcon,
//   },
//   {
//     label: "Docs",
//     icon: CodeBracketSquareIcon,
//   },
// ];

function NavList() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date(), 1000));
  }, []);

  return (
    <ul className="mb-4 mt-2 flex flex-col xl:mb-0 lg:mt-0 2xl:flex-row 2xl:items-center">
      <Typography
        variant="medium"
        color="blue-gray"
        className="font-bold hidden 2xl:flex mr-4 items-center"
      >
        <CalendarDaysIcon className="h-[20px] w-[20px] mr-2" />{" "}
        {getCurrentDate()}
      </Typography>
      <Typography
        variant="medium"
        color="blue-gray"
        className="font-bold hidden 2xl:flex mr-8 items-center"
      >
        <ClockIcon className="h-[20px] w-[20px] mr-2" />
        {time.toLocaleTimeString()}
      </Typography>

      <NavListMenu />
      {/* {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))} */}
    </ul>
  );
}

export default NavList;
