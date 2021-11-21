class Room < ApplicationRecord
  belongs_to :host, class_name: Player.to_s
  belongs_to :game

  has_many :room_guests
  has_many :guests, through: :room_guests, source: :player

  def join(guest)
    guests << guest
    self
  end

  def evict(guest)
    guests.delete(guest)
    self
  end
end