
import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import { fetchLeagueswithpages } from './LeaguesAPI';
import { Pagination, Stack, List, CircularProgress } from '@mui/material';

import { VideoGameContext } from '../App.js';
const initialState = () => { return []; }

function Leagues() {

    const [list, setList] = useState(initialState);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1)
    const [loading, setLoading] = useState(false);

    const handleChange = (event, value) => {
        setPage(value);

    };
    const { currentGame } = useContext(VideoGameContext)
    async function fetChData(p = 1) {

        setLoading(true);

        const data = await fetchLeagueswithpages(currentGame, p);

        setTotal(data.headers.get('x-total'));

        setList(data.json);

        setLoading(false);
    }

    useEffect(() => {
        fetChData(page);

    }, [page, currentGame]);

    return (
        <div className="leagues-list">
            {loading ? <CircularProgress colors="primary" /> :
                <List>
                    {list.map((el) => (
                        <Item key={el.id} name={el.name} url={el.image_url} id={el.id}></Item>)
                    )}

                </List>
            }
            <div className="pagination">
                <Pagination page={page}
                    count={Math.ceil(total / 5)}
                    onChange={handleChange}
                    color="primary"
                    showFirstButton
                    showLastButton />

            </div>

        </div >
    );
}

export default Leagues;