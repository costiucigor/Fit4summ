import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
        <Box width="400px" sx={{ width: { x1: "1488px"}}} m="auto">
            <NavBar />
        </Box>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
