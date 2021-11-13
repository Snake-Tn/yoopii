class Room < ApplicationRecord
  belongs_to :host, class_name: Player.to_s
  # belongs_to :guests, through: :rooms_guests
end