class Message < ApplicationRecord
  belongs_to :sender, class_name: Player.to_s
  belongs_to :receiver, class_name: Room.to_s
end
