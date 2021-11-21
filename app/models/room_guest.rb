# frozen_string_literal: true

class RoomGuest < ApplicationRecord

  belongs_to :room
  belongs_to :player

end
