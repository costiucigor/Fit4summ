import React, { useState } from 'react';

const ExerciseCalculator = () => {


    const [age, setAge] = useState<number | ''>('');
    const [fitnessLevel, setFitnessLevel] = useState<string>('');
    const [exercises, setExercises] = useState<string[]>([]);

    const calculateExercises = () => {
        // Implement your exercise calculation logic heres
        // This is just a placeholder example

        let calculatedExercises: string[] = [];

        if (age >= 18 && fitnessLevel === 'beginner') {
            calculatedExercises = ['Push-ups', 'Squats', 'Planks'];
        } else if (age >= 18 && fitnessLevel === 'intermediate') {
            calculatedExercises = ['Burpees', 'Lunges', 'Mountain climbers'];
        } else if (age >= 18 && fitnessLevel === 'advanced') {
            calculatedExercises = ['Pull-ups', 'Deadlifts', 'Box jumps'];
        } else {
            calculatedExercises = ['Please provide valid age and fitness level.'];
        }

        setExercises(calculatedExercises);
    };

    return (
        <div>
            <h2>Exercise Calculator</h2>
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
            <button onClick={calculateExercises}>Calculate</button>
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