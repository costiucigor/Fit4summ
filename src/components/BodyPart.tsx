import { FC } from 'react';
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/images/Logo.png";


type BodyPartProps = {
    item: string;
    setBodyPart: (part: string) => void;
    bodyPart: string;
};

const BodyPart: FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            component="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#30B040" textTransform="capitalize"> {item}</Typography>
        </Stack>
    );
};

export default BodyPart;