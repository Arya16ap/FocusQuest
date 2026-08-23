// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./screens/LoginRegister";
import Homepage from "./screens/homepage";
import Settings from "./screens/settings";
import StudyMatch from "./components/StudyMatch";
import Progress from './screens/progress';


export default function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/studymatch" element={<StudyMatch />} />
      <Route path="/progress" element={<Progress />} />

    </Routes>
  );
}
