- Single page app
- Login (No password, guest mode only for now)
- Lobby
  - list of existent games
  - create a new game button
- create a new game page
  - list of available games, for each game build a setting panel using some config
  - create the game
  - start the game when criteria are met.
    - ex: a human participant has joined.
- join a created game    


API
 - /authenticate?mode=guest | persist player (in guest mode)
 - post /games 
 - GET /games list games 
 - /games/{id}/join  join a game
 - /games/{id}/quit  quit a game

game
  id;desc;state;host
joiner
  id_game;id_joiner

player
  username; is_guest