interface Params {
    api_token_path: string,
    api_players_path: string,
    api_rooms_path: string,
    api_guests_path: string,
    api_games_path: string,
}

const params: Params = {
    api_token_path: '/api/tokens',
    api_players_path: '/api/players',
    api_rooms_path: '/api/rooms',
    api_guests_path: '/api/rooms/{room_id}/guests',
    api_games_path: '/api/games',
}

export default params