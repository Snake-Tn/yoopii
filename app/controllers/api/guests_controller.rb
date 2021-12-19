class Api::GuestsController < ApplicationController

  def index
    room = Room.find(params[:room_id])
    authorize room, policy_class: RoomGuestPolicy
    @guests = room.guests
  end

  def create
    room = Room.find(params[:room_id])
    authorize room, policy_class: RoomGuestPolicy
    Room.destroy_by(host: current_player)
    RoomGuest.destroy_by(player: current_player)
    room.join(current_player)
    room.save!
    head :created
  end

  def destroy
    room = Room.find(params[:room_id])
    player = Player.find(params[:id])

    authorize room.room_guests.find_by!(player: player)
    room.evict(player)
    room.save!
    head :ok
  rescue ActiveRecord::RecordNotFound
    head :not_found
  end
end

