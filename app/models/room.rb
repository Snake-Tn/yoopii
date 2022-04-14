class Room < ApplicationRecord
  belongs_to :host, class_name: Player.to_s
  belongs_to :game

  has_many :room_guests, dependent: :destroy
  has_many :guests, through: :room_guests, source: :player
  # has_many :messages, dependent: :destroy, foreign_key: :receiver_id

  def join(guest)
    guests << guest
    self
  end

  def evict(guest)
    guests.delete(guest)
    self
  end

  def players
    guests + [host]
  end
end