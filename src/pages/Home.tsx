import React from 'react';
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises"

const Home = () => {
    return (
        <div>
            <Banner />
            <Exercises />
            <Exercises />
        </div>
    );
};

export default Home;