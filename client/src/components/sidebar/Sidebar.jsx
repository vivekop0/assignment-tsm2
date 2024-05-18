import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, PowerIcon } from "@heroicons/react/24/solid";
import { IoCreateOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { logoutSuccess } from "../../redux/authSlice";
import history from "../../history";

export function DefaultSidebar() {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/signin");
    window.location.reload();
  };

  return (
    <Card className=" h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 md:p-4">
        <Typography variant="h5" color="blue-gray">
          {currentUser.username}
        </Typography>
      </div>

      <List>
        <Link to={"/dashboard"} className="mb-3">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link to={"/taskmanager"} className="font-semibold mb-3">
          <ListItem>
            <ListItemPrefix>
              <IoCreateOutline className="h-5 w-5" />
            </ListItemPrefix>
            Create Task
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>

          <Link to="/signin" className=" " onClick={handleClick}>
            SignOut
          </Link>
        </ListItem>
      </List>
    </Card>
  );
}
