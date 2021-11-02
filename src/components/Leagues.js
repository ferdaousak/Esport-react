import React, { useEffect, useState } from 'react';
import Item from './Item';
import { fetchLeagueswithpages } from './LeaguesAPI';
import { Pagination, Stack, List, CircularProgress } from '@mui/material';


const initialState = () => { return []; }

function Leagues() {

    const [list, setList] = useState(initialState);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1)
    const [loading, setLoading] = useState(false);

    const handleChange = (event, value) => {
        setPage(value);

    };
    async function fetChData(p = 1) {

        setLoading(true);

        const data = await fetchLeagueswithpages(p);

        setTotal(data.headers.get('x-total'));

        setList(data.json);

        setLoading(false);
    }

    useEffect(() => {
        fetChData(page);

    }, [page]);

    return (
        <div>
            {loading ? <CircularProgress colors="primary" /> :
                <Stack spacing={2}>
                    <List>
                        {list.map((el) => (
                            <Item key={el.id} name={el.name} url={el.image_url} id={el.id}></Item>)
                        )}

                    </List>
                    <Pagination page={page}
                        count={Math.ceil(total / 5)}
                        onChange={handleChange}
                        color="primary"
                        showFirstButton
                        showLastButton />
                </Stack>
            }



        </div>
    );
}

export default Leagues;