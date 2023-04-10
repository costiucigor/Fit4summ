import {FC, React} from 'react';
import { Stack, Typography } from "@mui/material"
import Icon from "../assets/images/Logo.png"


type BodyPartProps = {
    item: boolean;
    setBodyPart: (part: string) => void;
    bodyPart: string;
};

const BodyPart: FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => {
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
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
        </Stack>
    );
};

export default BodyPart;