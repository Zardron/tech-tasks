import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import {
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navListItems = [
  {
    label: "Sign in",
    icon: ArrowLeftOnRectangleIcon,
    link: "/sign-in",
  },
  {
    label: "Sign up",
    icon: UserPlusIcon,
    link: "/sign-up",
  },
];

function AccountMenu() {
  return (
    <div className="hidden 2xl:block">
      <ul className=" mb-4 mt-2 flex flex-col gap-2 2xl:mb-1 2xl:mt-0 2xl:flex-row 2xl:items-center">
        {navListItems.map(({ label, icon, link }, key) => (
          <Link to={link}>
            <Typography
              key={label}
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                {label}
              </MenuItem>
            </Typography>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default AccountMenu;
