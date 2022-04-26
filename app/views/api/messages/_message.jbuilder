json.extract! message, :id, :content
json.sender message.sender, partial: 'api/players/player', as: :player