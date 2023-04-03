import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const Banner = () => {
    return (
        <Box sx={{
            mt: {lg: "212px", xs: "70px"},
            ml: {sm: "50px"}
        }}
             position="relative" p="20px">
            <Typography fontWeight="600" fontSize="26px">
                Fit4sum
            </Typography>
            <Typography>
                Get fit, grind <br /> Repeat
            </Typography>
        </Box>
    );
};

export default Banner;