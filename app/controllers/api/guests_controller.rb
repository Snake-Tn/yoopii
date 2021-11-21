class Api::GuestsController < ApplicationController

  def create
    room = Room.find(params[:room_id])
    authorize room, policy_class: RoomGuestPolicy
    Room.destroy_by(host: current_player)
    RoomGuest.destroy_by(player: current_player)
    room.join(current_player)
    room.save!
  end

  def destroy
    room = Room.find(params[:room_id])
    player = Player.find(params[:id])

    authorize room.room_guests.find_by!(player: player)
    room.evict(player)
    room.save!
  rescue ActiveRecord::RecordNotFound
    head :not_found
  end
end

