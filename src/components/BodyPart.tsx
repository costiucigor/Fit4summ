import React from 'react';
import { Stack, Typography } from "@mui/material"
import Icon from "../assets/images/Logo.png"

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={
                bodyPart = item ? {
                    borderTop: "4px solid #fff",
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: "20px",
                    width: "270px",
                    height: "280px",
                    cursor: "pointer",
                    gap: "47px"
                } : "#fff"
            }
        >
            <img src={Icon} alt="dumbell" styles={{width: "40px", height: "40px"}}/>
        </Stack>
    );
};

export default BodyPart;