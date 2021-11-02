import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { Component, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


function TeamItem(props) {

    return (
        <div >

            <ListItem>


                <ListItemAvatar>
                    <Avatar src={props.url} />
                </ListItemAvatar>
                <Link key={props.id} to={`/teams/${props.id}`}>
                    {props.name}
                </Link>
            </ListItem>
        </div>

    );
}

export default TeamItem;