json.call room, :id, :title, :description
json.game { json.partial! 'api/games/game', game: room.game }
json.host { json.partial! 'api/players/player', player: room.host }
