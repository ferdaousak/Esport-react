import React, { useEffect, useState } from 'react';
import TeamItem from './TeamItem';
import { fetchTeamswithpages } from './LeaguesAPI';
import { Pagination, Stack, List, CircularProgress } from '@mui/material';


const initialState = () => { return []; }

function Teams() {

    const [list, setList] = useState(initialState);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1)
    const [loading, setLoading] = useState(false);

    const handleChange = (event, value) => {
        setPage(value);

    };
    async function fetChData(p = 1) {

        setLoading(true);

        const data = await fetchTeamswithpages(p);

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
                            <TeamItem key={el.id} name={el.name} url={el.image_url} id={el.id}></TeamItem>)
                        )}

                    </List>
                    <Pagination page={page}
                        count={Math.ceil(total / 6)}
                        onChange={handleChange}
                        color="primary"
                        showFirstButton
                        showLastButton />
                </Stack>
            }



        </div>
    );
}

export default Teams;