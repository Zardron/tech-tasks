import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import NavList from "../Navbar/NavList";
import ProfileMenu from "../Navbar/ProfileMenu";
import AccountMenu from "../Navbar/AccountMenu";
import MobileAccountMenu from "../Navbar/MobileAccountMenu";
import Login from "../Account/Login";

const NavbarMenu = () => {
  const [openNav, setOpenNav] = useState(false);

  const loggedIn = false;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="m-auto max-w-screen-2xl flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="absolute top-2/4 left-[38%] hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <div className="mx-auto max-w-screen-full bg-cover bg-[url('https://odtech.club/wp-content/uploads/2022/02/59f1f5fe33a97.jpeg')]">
        <Login />
      </div>
    </>
  );
};

export default NavbarMenu;
