import React, { useState } from 'react';
import {
    Typography,
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    List,
    ListItem,
} from '@mui/material';
import {Route} from "react-router-dom";
import Home from "./Home";

const ExerciseCalculator = () => {
    const [age, setAge] = useState<number | ''>('');
    const [formSubmited, setFormSubmited] = useState<boolean>(false)
    const [fitnessLevel, setFitnessLevel] = useState<string>('');
    const [goal, setGoal] = useState<string>('');
    const [exercises, setExercises] = useState<string[]>([]);

    const calculateExercises = (event: React.FormEvent) => {
        event.preventDefault();

        const exerciseOptions: { [key: string]: { [key: string]: string[] } } = {
            beginner: {
                'weight-loss': ['Push-ups', 'Squats', 'Planks', 'Running'],
                'muscle-gain': ['Push-ups', 'Squats', 'Planks', 'Dumbbell curls'],
                endurance: ['Push-ups', 'Squats', 'Planks', 'Jumping jacks'],
            },
            intermediate: {
                'weight-loss': ['Burpees', 'Lunges', 'Mountain climbers', 'Cycling'],
                'muscle-gain': ['Burpees', 'Lunges', 'Mountain climbers', 'Bench press'],
                endurance: ['Burpees', 'Lunges', 'Mountain climbers', 'Swimming'],
            },
            advanced: {
                'weight-loss': ['Pull-ups', 'Deadlifts', 'Box jumps', 'HIIT workouts'],
                'muscle-gain': ['Pull-ups', 'Deadlifts', 'Box jumps', 'Barbell squats'],
                endurance: ['Pull-ups', 'Deadlifts', 'Box jumps', 'Circuit training'],
            },
        };

        if (age >= 18 && fitnessLevel && goal) {
            const calculatedExercises = exerciseOptions[fitnessLevel]?.[goal] || [];
            setExercises(calculatedExercises);
        } else {
            setExercises(['Please provide valid age, fitness level, and goal.']);
        }
        setFormSubmited(true)
    };

    const handleButtonClick = () => {
        (history as any).push('/');
    };


    return (
        <Box sx={{
            mt: { lg: '140px', xs: '60px' },
            height: '70vh', // Set the height to 100% of the viewport height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography
                sx = {{
                    mt: "180px",
                    position: "absolute",
                    top: 0
                }}
                variant="h4"
            >
                Exercise Calculator
            </Typography>
            <form onSubmit={calculateExercises}>
                <Box mt={2}>
                    <TextField
                        type="number"
                        label="Age"
                        required
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                    />
                </Box>
                <Box mt={2}>
                    <FormControl fullWidth required>
                        <InputLabel>Fitness Level</InputLabel>
                        <Select value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)}>
                            <MenuItem value="">Select level</MenuItem>
                            <MenuItem value="beginner">Beginner</MenuItem>
                            <MenuItem value="intermediate">Intermediate</MenuItem>
                            <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box mt={2}>
                    <FormControl fullWidth required>
                        <InputLabel>Goal</InputLabel>
                        <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
                            <MenuItem value="">Select goal</MenuItem>
                            <MenuItem value="weight-loss">Weight Loss</MenuItem>
                            <MenuItem value="muscle-gain">Muscle Gain</MenuItem>
                            <MenuItem value="endurance">Endurance</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box mt={2}>
                    <Button
                        sx={{
                            backgroundColor: "#30B040",
                            '&:hover': {
                                backgroundColor: '#3DE952',
                            },
                        }}
                        type="submit"
                        variant="contained"
                    >
                        Calculate
                    </Button>
                </Box>
            </form>
            <Box
                sx = {{
                    mt: "380px",
                    ml: "586px",
                    position: "absolute",
                    top: 0
                }}
                mt={4}>
                {formSubmited && (
                    <>
                <Typography variant="h5">Recommended Exercises:</Typography>
                <List>
                    {exercises.map((exercise, index) => (
                        <ListItem key={index}>{exercise}</ListItem>
                    ))}
                </List>
                        <Typography variant="h6">Go on and search those</Typography>
                        <Button
                            sx={{
                                backgroundColor: "#30B040",
                                '&:hover': {
                                    backgroundColor: '#3DE952',
                                },
                            }}
                            onClick={handleButtonClick}  variant="contained">
                            Here
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};


export default ExerciseCalculator;