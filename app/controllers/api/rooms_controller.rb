class Api::RoomsController < ApplicationController

  def index

    render json: '{"games": []}'
  end

  def create
    room_params = params.permit(:description, :title)
    host = current_player

    room = Room.new room_params
    room.host = host

    room.save!
    render json: room
  end

  def join
    room = Room.find(params[:id])
    head :bad_request unless room.join? current_player
    room.join(current_player)
    room.save!
  end

end

