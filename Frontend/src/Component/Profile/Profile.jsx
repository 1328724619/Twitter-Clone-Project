import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Box, Tab } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { createSvgIcon, capitalize } from '@mui/material/utils';
import TalkCard from '../HomeSection/TalkCard';
import ProfileModal from '../Profile/ProfileModal';

function Profile() {

    const [tabValue, setTabValue]=useState("1")

  const navigate = useNavigate();

  const [openProfileModel, setOpenProfileModal] = useState(false);
    const handleOpenProfileModel = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
  

  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    console.log("follow user");
  };

  const handleTabChange=(event, newValue)=>{
    setTabValue(newValue)

    if(newValue === 4){
        console.log("likes post")
    }
    else if(newValue === 1){
        console.log("users posts")
    }
  }

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardArrowLeftIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tian</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[20rem] object-cover"
          src="https://media.idownloadblog.com/wp-content/uploads/2015/01/wallpaper-earth-and-moon-space-9-wallpaper.jpg"
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Tian"
            src="http://localhost:3000/static/media/photoicon.7006fe65fa7728390411.jpg"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{
                borderRadius: "20px",
              }}
            >
              Edit profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{
                borderRadius: "20px",
              }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Tian</h1>
            <h1 className="text-gray-500">@tt</h1>
          </div>

        </div>
        <div className="mt-2 space-y-3">
            <p>This is Tian</p>
            <div className="py-1 flex space-x-5">
                <div className="flex items-center text-gray-500">
                    <BusinessCenterIcon/>
                    <p className="ml-2">Education</p>
                </div>

                <div className="flex items-center text-gray-500">
                    <LocationOnIcon/>
                    <p className="ml-2">Chinese</p>
                </div>
                <div className="flex items-center text-gray-500">
                <CalendarMonthIcon/>
                <p className="ml-2">Joined March 2025</p>
                </div>

                <div className="flex items-center space-x-5">

                <div className="flex items-center space-x-1 font-semibold">
                        <span>10</span>
                        <span className="text-gray-500">Following</span>
                    </div>

                    <div className="flex items-center space-x-1 font-semibold">
                        <span>100</span>
                        <span className="text-gray-500">Followers</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Posts" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {[1].map((item)=><TalkCard/>)}
        </TabPanel>
        <TabPanel value="2">Users Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModel}/>
      </section>
    </div>
  );
}

export default Profile;
