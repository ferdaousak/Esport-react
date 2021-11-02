import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { VideoGameContext } from '../App';
import { fetchVideoGames } from './LeaguesAPI';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GameSelect() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false)
    const { currentGame, setCurrentGame } = useContext(VideoGameContext);

    const getGames = async () => {
        setLoading(true);
        const data = await fetchVideoGames();

        setGames(data);
        setLoading(false);
    }

    const handleChange = (event) => {
        setCurrentGame(event.target.value);
    }

    useEffect(() => {
        getGames();

    }, [])

    let content

    if (loading) {
        content = <option disabled>Loading...</option>
    }
    else {
        content = games.map(el => (
            <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
        ))
    }
    return (
        <Box sx={{ minWidth: 120, marginTop: "8px" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">VG</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="VideoGame"
                    value={currentGame}
                    onChange={handleChange}
                >
                    {content}
                </Select>
            </FormControl>
        </Box>
    );
}