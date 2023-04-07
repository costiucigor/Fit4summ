import React from 'react';
import {Box} from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({data}) => {
    return (
        <div>
            {data.map((item) => (
                    <Box
                    key={item.id || item.name}
                    itemId={item.id || item.name}
                    tittle={item.id || item.name}
                    m="0 50px"
                    >
                        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                    </Box>
                )
            )}
        </div>
    );
};

export default HorizontalScrollBar;