import React, {useState} from 'react';
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises"
import Search from "../components/Search";

const Home = () => {
    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);
    // @ts-ignore
    return (
        <div>
            <Banner/>
            <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </div>
    );
};

export default Home;