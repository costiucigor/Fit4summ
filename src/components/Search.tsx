import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

interface SearchProps {
    setExercises: (exercises: any[]) => void;
    bodyPart: string;
    setBodyPart: (bodyPart: string) => void;
}


const Search: React.FC<SearchProps> = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState<string[]>([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item: any) =>
                    item.name.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search)
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight="700"
                sx={{
                    fontSize: { lg: '44px', xs: '30px' },
                }}
                mb="50px"
                textAlign="center"
            >
                Believe in yourself and all that you are.
                <br /> Know that there is something inside you that is greater than any obstacle.
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '600',
                            borderRadius: '6px',
                        },
                        width: { lg: '1170px', xs: '360px' },
                    }}
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercise"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#30B040',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '174px', xs: '100px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
};

export default Search;