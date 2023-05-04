import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const navListItems = [
  {
    label: "Sign in",
    icon: UserCircleIcon,
  },
  {
    label: "Sign up",
    icon: CubeTransparentIcon,
  },
];

function MobileAccountMenu() {
  return (
    <div className="mt-auto">
      <hr></hr>
      <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, icon }, key) => (
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
        ))}
      </ul>
    </div>
  );
}

export default MobileAccountMenu;
