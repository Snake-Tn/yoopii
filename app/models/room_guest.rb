class RoomGuest < ApplicationRecord
  has_one :room
  has_many :guests, class_name: Player.to_s
end

