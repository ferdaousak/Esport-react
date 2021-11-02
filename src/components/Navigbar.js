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
import GameSelect from './GameSelect';

export default function Navigbar() {
    return (
        <>
            <ul className="nav-app">
                <li>
                    <Link className="nav-link" to="/leagues">Leagues</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/teams">Teams</Link>
                </li>
            </ul>
            <GameSelect />
        </>
    );
}