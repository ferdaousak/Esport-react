export const fetchLeagueswithpages = async (game = 1, page = 1) => {

    const response = await fetch(
        process.env.REACT_APP_BASE_URL + 'leagues?filter[videogame_id]=' + game + '&sort=id&page[number]=' + page + '&page[size]=5',
        {
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
