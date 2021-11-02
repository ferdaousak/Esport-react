import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import React, { Component, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { fetchLeague } from './LeaguesAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { VideoGameContext } from '../App';

function League() {

    const [league, setLeague] = useState({ series: [] });
    let { leagueId } = useParams();

    // const { currentGame } = useContext(VideoGameContext)
    async function fetChData2() {

        const data = await fetchLeague(leagueId);

        setLeague(data);
    }

    useEffect(() => {
        fetChData2();

    }, []);

    return (
        <Stack direction='row' >
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={league.image_url}
                    alt="green iguana"
                />
            </Card>
            <Card>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {league.name}
                    </Typography>
                    {league.url ? <Typography gutterBottom variant="subtitle1" component="div">
                        {league.url}
                    </Typography> : null}

                    {league.videogame ?
                        <Typography variant="subtitle1" color="text.secondary">{league.videogame.name}
                        </Typography>
                        :
                        null
                    }
                    <List>
                        {league.series.map(serie => (
                            <ListItem>
                                <ListItemText primary={serie.full_name} secondary={' DE ' + serie.begin_at + ' à ' + serie.end_at} ></ListItemText>
                                {serie.winner_id ? <Link key={serie.winner_id} to={`/teams/${serie.winner_id}`}>Winner
                                </Link> : "No winner"}

                            </ListItem>

                        ))}


                    </List>
                </CardContent>

            </Card>
        </Stack >
    );

}

export default League;