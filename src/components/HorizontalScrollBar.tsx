import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

interface HorizontalScrollBarProps {
    data: { id?: string; name?: string }[];
    bodyPart: string;
    setBodyPart: (bodyPart: string) => void;
}


const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({ data, bodyPart, setBodyPart }) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {data.map((item) => (
                <Box
                    key={item.id || item.name}
                    itemID={item.id || item.name}
                    title={item.id || item.name}
                    m="0 50px"
                >
                    <BodyPart
                        isSelected={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            ))}
        </div>
    );
};

export default HorizontalScrollBar;
