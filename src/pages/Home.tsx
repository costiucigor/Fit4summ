import React from 'react';
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises"
import Search from "../components/Search";

const Home = () => {
    return (
        <div>
            <Banner />
            <Search />
            <Exercises />
        </div>
    );
};

export default Home;