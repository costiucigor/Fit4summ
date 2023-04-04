import React, {useEffect, useState} from 'react';

import {Box, Button, Stack, TextField, Typography} from "@mui/material";

const Search = () => {
    const [search, setSearch] = useState("");

    const handleSearch = async() => {
        if(search) {
            // const exerciseData = await fetchData();
        }
    }
    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                fontWeight="700"
                sx={{
                    fontSize: {lg: "44px", xs: "30px"}
                }}
                mb="50px"
                textAlign="center"
            >
                Believe in yourself and all that you are.<br/> Know that there is something inside you that is greater
                than any obstacle.
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "600",
                            borderRadius: "6px"
                        },
                        width: {lg: "1170px", xs: "360px"},
                    }}
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercise"
                    type="text"
                />
                <Button className="search-btn"
                        sx={{
                            bgcolor: "#30B040",
                            color: "#fff",
                            textTransform: "none",
                            width: {lg: "174px", xs: "100px"},
                            fontSize: {lg: "20px", xs: "14px"},
                            height: "56px",
                            position: "absoulte",
                            right: "0",
                        }}
                        onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default Search;