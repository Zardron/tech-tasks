import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import NavList from "../Navbar/NavList";
import ProfileMenu from "../Navbar/ProfileMenu";
import AccountMenu from "../Navbar/AccountMenu";
import MobileAccountMenu from "../Navbar/MobileAccountMenu";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { getCurrentDate } from "../GetCurrentDate";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/solid";

const NavbarMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  const [time, setTime] = useState(new Date());

  const loggedIn = false;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 760 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    setInterval(() => setTime(new Date(), 1000));
  }, []);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-8 border-b divide-solid border-gray-700">
        <div className="m-auto max-w-screen-2xl flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img src={Logo} className="h-14" alt="logo" />
          </Link>
          <div className="hidden absolute top-2/4 left-[5%] translate-x-2/4 -translate-y-2/4 2xl:block">
            <NavList />
          </div>
          <div className="flex items-center gap-4 xs:m-2">
            <Typography
              variant="medium"
              color="blue-gray"
              className="font-bold 2xl:hidden xs:text-xs flex items-center"
            >
              <CalendarDaysIcon className="h-[20px] w-[20px] mr-2 xs:hidden" />{" "}
              {getCurrentDate()}
            </Typography>
            <Typography
              variant="medium"
              color="blue-gray"
              className="font-bold 2xl:hidden xs:text-xs flex items-center"
            >
              <ClockIcon className="h-[20px] w-[20px] mr-2 xs:hidden" />{" "}
              {time.toLocaleTimeString()}
            </Typography>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 2xl:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            {loggedIn ? <ProfileMenu /> : <AccountMenu />}
          </div>
        </div>
        <MobileNav open={openNav}>
          <NavList />
          {loggedIn ? (
            <div style={{ display: "none" }}></div>
          ) : (
            <MobileAccountMenu />
          )}
        </MobileNav>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
