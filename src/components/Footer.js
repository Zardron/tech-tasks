import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-4">
      <Typography
        color="blue-gray"
        className="flex item-center justify-center font-normal"
      >
        &copy; 2023 POWERED BY TECH TASK. - ALL RIGHTS RESERVED
      </Typography>
    </footer>
  );
}
