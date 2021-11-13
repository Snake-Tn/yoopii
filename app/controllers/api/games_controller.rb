class Api::GamesController < ApplicationController

  def index

    render json: '{"games": []}'
  end

  def create
    player = current_player

  end

end

