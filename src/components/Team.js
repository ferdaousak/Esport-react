import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchLeague, fetchTeam } from './LeaguesAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Team() {

    const [team, setTeam] = useState({ players: [] });

    let { teamId } = useParams();

    async function fetChData2() {

        const data = await fetchTeam(teamId);

        setTeam(data);
        console.log(data);
    }

    useEffect(() => {
        fetChData2();

    }, []);
    const styleContainer = {
        maxWidth: 345,
        marginTop: 70
    };

    return (
        <Card style={styleContainer}>
            <CardMedia
                component="img"
                height="auto"
                image={team.image_url}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {team.name}
                </Typography>
                {team.location ? <Typography gutterBottom variant="subtitle1" component="div">
                    {team.location}
                </Typography> : null}

                {team.current_videogame ?
                    <Typography variant="subtitle1" color="text.secondary">{team.current_videogame.name}
                    </Typography>
                    :
                    null
                }
                <List>
                    {team.players.map(player => (
                        <ListItem>
                            <ListItemText primary={player.name} secondary={' nationality ' + player.nationality} >

                            </ListItemText>

                        </ListItem>

                    ))}


                </List>
            </CardContent>
        </Card >
    );

}

export default Team;