import React, { useState } from 'react';

const ExerciseCalculator = () => {
    const [age, setAge] = useState<number | ''>('');
    const [fitnessLevel, setFitnessLevel] = useState<string>('');
    const [goal, setGoal] = useState<string>('');
    const [exercises, setExercises] = useState<string[]>([]);

    const calculateExercises = (event: any) => {
        event.preventDefault()
        let calculatedExercises: string[] = [];

        if (age >= 18 && fitnessLevel === 'beginner') {
            if (goal === 'weight-loss') {
                calculatedExercises = ['Push-ups', 'Squats', 'Planks', 'Running'];
            } else if (goal === 'muscle-gain') {
                calculatedExercises = ['Push-ups', 'Squats', 'Planks', 'Dumbbell curls'];
            } else if (goal === 'endurance') {
                calculatedExercises = ['Push-ups', 'Squats', 'Planks', 'Jumping jacks'];
            }
        } else if (age >= 18 && fitnessLevel === 'intermediate') {
            if (goal === 'weight-loss') {
                calculatedExercises = ['Burpees', 'Lunges', 'Mountain climbers', 'Cycling'];
            } else if (goal === 'muscle-gain') {
                calculatedExercises = ['Burpees', 'Lunges', 'Mountain climbers', 'Bench press'];
            } else if (goal === 'endurance') {
                calculatedExercises = ['Burpees', 'Lunges', 'Mountain climbers', 'Swimming'];
            }
        } else if (age >= 18 && fitnessLevel === 'advanced') {
            if (goal === 'weight-loss') {
                calculatedExercises = ['Pull-ups', 'Deadlifts', 'Box jumps', 'HIIT workouts'];
            } else if (goal === 'muscle-gain') {
                calculatedExercises = ['Pull-ups', 'Deadlifts', 'Box jumps', 'Barbell squats'];
            } else if (goal === 'endurance') {
                calculatedExercises = ['Pull-ups', 'Deadlifts', 'Box jumps', 'Circuit training'];
            }
        } else {
            calculatedExercises = ['Please provide valid age, fitness level, and goal.'];
        }

        setExercises(calculatedExercises);
    };

    return (
        <div>
            <h2>Exercise Calculator</h2>
            <form onSubmit={calculateExercises}>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Fitness Level:
                        <select value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)}>
                            <option value="">Select level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Goal:
                        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                            <option value="">Select goal</option>
                            <option value="weight-loss">Weight Loss</option>
                            <option value="muscle-gain">Muscle Gain</option>
                            <option value="endurance">Endurance</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Calculate</button>
            </form>
            <div>
                <h3>Recommended Exercises:</h3>
                <ul>
                    {exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default ExerciseCalculator;