import React from "react";
import LevelMap from "../components/LevelMap.jsx";
import "./homepage.css";
import Sidebar from "../components/Sidebar";
import StudyMatch from "../components/StudyMatch.jsx";
import EducationGallery from "../components/componentGallary.jsx";  



function Homepage() {


  return (
    <div style={{ padding: "40px" }}>
      
      
      <Sidebar />
      <EducationGallery/>

      
      <div className="gay"><StudyMatch/></div>
      
    </div>
  );
}
export default Homepage;