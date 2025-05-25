import React, {useState} from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Menu, MenuItem } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from "./ReplyModal";


const TalkCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    console.log("delete post");
    handleClose();
  };

  const handleCreatePost=()=>{
    console.log("handle create posts")
  }

  const handleLikePost=()=>{
    console.log("handle like posts")
  }
  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
        <RepeatIcon/>
        <p>You ReTalk</p>
      </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="http://localhost:3000/static/media/photoicon.7006fe65fa7728390411.jpg"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center">
              <span className="font-semibold">Tian</span>
              <span className="text-gray-600">@tt . 2m</span>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon/>
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
                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                <MenuItem onClick={handleDeletePost}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=>navigate(`/talk/${3}`)} className="cursor-pointer">
              <p className="mb-2 p-0">GTR - R35</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                  <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                  <p>43</p>
              </div>

              <div className={`${true? "text-pink-600" : "text-gray-600"}space-x-3 flex items-center`}>
                <RepeatIcon onClick={handleCreatePost} className="cursor-pinter"/>
                <p>54</p>
              </div>
              <div className={`${true? "text-pink-600" : "text-gray-600"}space-x-3 flex items-center`}>
                {true? <FavoriteIcon onClick={handleLikePost} className="cursor-pinter"/> : <FavoriteIcon onClick={handleLikePost} className="cursor-pinter"/>}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                  <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                  <p>431</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                  <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
      </section>
    </React.Fragment>
  );
};

export default TalkCard;
