class Api::PlayersController < ApplicationController

  skip_before_action :authenticate, only: [:create]

  def create
    player_params = params.permit(%i[password username])

    @player = Player.create player_params
    render status: :created
  end

end


