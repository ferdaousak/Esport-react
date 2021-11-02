import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { Component, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { fetchLeague } from './LeaguesAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function League() {

    const [league, setLeague] = useState({ series: [] });

    let { leagueId } = useParams();

    async function fetChData2() {

        const data = await fetchLeague(leagueId);

        setLeague(data);
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
                image={league.image_url}
                alt="green iguana"
            />
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
        </Card >
    );

}

export default League;