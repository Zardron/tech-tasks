import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserPlusIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavListMenu() {
  const [isEmployee, setIsEmployee] = useState(false);
  const [isTask, setIsTask] = useState(false);

  const triggerEmployee = {
    onMouseEnter: () => setIsEmployee(true),
    onMouseLeave: () => setIsEmployee(false),
  };

  const triggerTask = {
    onMouseEnter: () => setIsTask(true),
    onMouseLeave: () => setIsTask(false),
  };

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>;

  const employeeSubMenu = (
    <>
      <Link>
        <MenuItem>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal mb-1 flex flex-row items-center"
          >
            <UserPlusIcon className="h-[18px] w-[18px] mb-1 mr-2" /> Add
            Employee
          </Typography>
        </MenuItem>
      </Link>
      <Link>
        <MenuItem>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal  mb-1  flex flex-row items-center"
          >
            <UserGroupIcon className="h-[18px] w-[18px] mb-1 mr-2" /> View
            Employees
          </Typography>
        </MenuItem>
      </Link>
    </>
  );

  const taskSubMenu = (
    <>
      <Link>
        <MenuItem>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal mb-1 flex flex-row items-center"
          >
            <ClipboardDocumentCheckIcon className="h-[18px] w-[18px] mb-1 mr-2" />{" "}
            Add Task
          </Typography>
        </MenuItem>
      </Link>
      <Link>
        <MenuItem>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal  mb-1  flex flex-row items-center"
          >
            <ClipboardDocumentListIcon className="h-[18px] w-[18px] mb-1 mr-2" />{" "}
            View Tasks
          </Typography>
        </MenuItem>
      </Link>
    </>
  );

  return (
    <React.Fragment>
      {/* FOR DESKTOP VIEW */}

      {/* Employee Menu */}
      <Menu open={isEmployee} handler={setIsEmployee}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggerEmployee}
              className="hidden items-center gap-2 text-blue-gray-900 2xl:flex "
            >
              <UserGroupIcon className="h-[18px] w-[18px]" /> Employee{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isEmployee ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggerEmployee}
          className="hidden mt-[2px] ml-[1.5rem] w-[10rem] gap-3 overflow-visible 2xl:grid"
        >
          <ul className="flex w-full flex-col">{employeeSubMenu}</ul>
        </MenuList>
      </Menu>
      {/*  */}

      {/* Task Menu */}
      <Menu open={isTask} handler={setIsTask}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggerTask}
              className="hidden items-center gap-2 text-blue-gray-900 2xl:flex "
            >
              <ClipboardDocumentListIcon className="h-[18px] w-[18px]" /> Task{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isTask ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggerTask}
          className="hidden mt-[2px] ml-[2.6rem] w-[10rem] gap-3 overflow-visible 2xl:grid"
        >
          <ul className="flex w-full flex-col">{taskSubMenu}</ul>
        </MenuList>
      </Menu>
      {/*  */}

      {/* END OF DESKTOP VIEW */}

      {/* FOR MOBILE VIEW */}
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 2xl:hidden">
        <UsersIcon className="h-[18px] w-[18px]" /> Employee{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 2xl:hidden">
        {employeeSubMenu}
      </ul>

      <MenuItem className="flex items-center gap-2 text-blue-gray-900 2xl:hidden">
        <ClipboardDocumentListIcon className="h-[18px] w-[18px]" /> Task{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 2xl:hidden">
        {taskSubMenu}
      </ul>
      {/* END OF MOBILE VIEW */}
    </React.Fragment>
  );
}

export default NavListMenu;
