

// export const fetchLeagues = async () => {

//     const response = await fetch(
//         process.env.REACT_APP_BASE_URL,
//         {
//             mode: 'cors',
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
//             }
//         }
//     )
//     const json = await response.json();
//     return { json: json, headers: response.headers };
// }

export const fetchLeagueswithpages = async (game = 1, page = 1) => {

    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'videogames/' + game + '/leagues/?sort=id&page[number]=' + page + '&page[size]=5',
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )
    const json = await response.json();
    return { json: json, headers: response.headers };
}
export const fetchLeague = async (leagueId) => {


    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'leagues/' + leagueId,
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )
    const json = await response.json();
    return json;
}

export const fetchTeamswithpages = async (game = 1, page = 1) => {

    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'teams?filter[videogame_id]=' + game + '&sort=id&page[number]=' + page + '&page[size]=6',
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )
    const json = await response.json();
    return { json: json, headers: response.headers };
}
export const fetchTeam = async (teamId) => {

    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'teams/' + teamId,
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )
    const json = await response.json();
    return json;
}

export const fetchVideoGames = async () => {

    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'videogames',
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();

    return json;
}
