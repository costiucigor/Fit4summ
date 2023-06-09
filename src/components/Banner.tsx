import React from 'react';
import {Box, Stack, Typography, Button} from "@mui/material";

import BannerImage from "../assets/images/banner.png"

const scrollToExercises = () => {
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
}

const Banner = () => {
    return (
        <Box sx={{
            mt: {lg: "212px", xs: "70px"},
            ml: {sm: "50px"}
        }}
             position="relative" p="20px">
            <Typography fontWeight="600" color={"#30B040"} fontSize="26px">
                Fit4sum
            </Typography>
            <Typography fontWeight={700}
                        sx={{fontSize: {lg: "44px", xs: "40px"}}}
            >
                Get fit, grind <br/> Repeat
            </Typography>
            <Button
                sx={{
                    backgroundColor: "#30B040",
                    '&:hover': {
                        backgroundColor: '#3DE952',
                        href:"#exercises"
                    },
                }}
                variant="contained"
                onClick={scrollToExercises}
            >Checkout Exercises</Button>
            <Typography
                fontWeight={600}
                color="#3A1212"
                sx={{
                    opacity: 0.1,
                    display: {lg: "block", xs: "none"}
                }}
                fontSize="200px"
            >
            Exercise
            </Typography>
            <img
                src={BannerImage}
                alt="banner"
                className="banner-img"
            />
        </Box>
    );
};

export default Banner;