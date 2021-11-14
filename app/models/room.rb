class Room < ApplicationRecord
  belongs_to :host, class_name: Player.to_s

  has_and_belongs_to_many :guests, join_table: 'guests', class_name: Player.to_s

  def join(guest)
    guests << guest if join? guest
    self
  end

  def join?(guest)
    guests.include?(guest) || host == guest ? false : true
  end

  def players
    guests + [host]
  end
end