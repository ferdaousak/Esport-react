import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchVideoGames } from "./LeaguesAPI";


export default function Navigbar() {
    const [videogame, setVideogame] = useState([]);

    async function fetChData() {

        const data = await fetchVideoGames();

        setVideogame(data);
        console.log(data);
    }

    useEffect(() => {
        fetChData();

    }, []);

    return (
        <>
            <ul>
                <li>
                    <Link to="/">Page d'accueil</Link>
                </li>
                <li>
                    <Link to="/leagues">Leagues</Link>
                </li>
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
            </ul>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">VG</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="VideoGame"
                    >
                        {videogame.map(value => (
                            <MenuItem value={value.name}>{value.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

        </>
    );
}