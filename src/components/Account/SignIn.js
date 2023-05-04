import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <Card
        className="flex flex-col items-center"
        color="transparent"
        shadow={false}
      >
        <div className="bg-[#ffffffe3] p-10">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>

          <form className="mt-8 mb-2 w-96 xs:w-[16rem]">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Trust this Device
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              SIGN IN
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Dont have an account yet?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </div>
      </Card>
    </div>
  );
}
