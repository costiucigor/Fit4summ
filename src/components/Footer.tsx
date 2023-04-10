import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <div>
            <Box className="footer">
                <Typography
                    fontWeight={600}
                    color="#fff"
                    fontSize="16px"
                >
                    ®App created by Costiuc Igor, for learning purposes only, this is not a commercial product
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;