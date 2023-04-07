import React, {useState} from 'react';
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises"
import Search from "../components/Search";

const Home = () => {
    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);
    return (
        <div>
            <Banner setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
    );
};

export default Home;