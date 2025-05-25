import React from "react";
import logo from "../images/logo.png";
import photoicon from "../images/photoicon.jpg";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../Store/Auth/Action";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    handleClose();
  };

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5 -ml-8">
          <img src={logo} alt="Logo" width={"90"} />
        </div>

        <div>
          <div className="space-y-6">
            {navigationMenu.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex space-x-3 items-center"
                onClick={() =>
                  item.title === "Profile"
                    ? navigate(`/profile/${5}`)
                    : navigate(item.path)
                }
              >
                {item.icon}
                <p className="text-xl">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="py-10">
            <Button
              sx={{
                width: "100%",
                borderRadius: "29px",
                py: "15px",
                bgcolor: "#1e88e5",
              }}
              variant="contained"
            >
              Post Something!
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              alt="username"
              src={photoicon}
              sx={{ width: 45, height: 45 }}
            />

            <div>
              <span>Tian</span>
              <span className="opacity-70">@tt</span>
            </div>

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
