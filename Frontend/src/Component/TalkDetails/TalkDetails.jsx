import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import TalkCard from "../HomeSection/TalkCard";
import Divider from '@mui/material/Divider';

const TalkDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardArrowLeftIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Back</h1>
      </section>

      <section>
        <TalkCard/>
        <Divider sx={{margin:"2rem 0rem"}}/>
      </section>

      <section>
        
      </section>
    </React.Fragment>
  );
};

export default TalkDetails;
