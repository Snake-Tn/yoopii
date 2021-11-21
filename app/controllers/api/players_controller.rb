class Api::PlayersController < ApplicationController

  skip_before_action :authenticate, only: [:create]

  def create
    params.require([:mode, :username])

    @password = if params[:mode] == 'guest'
                  random_password
                else
                  params[:password]
                end

    player = Player.new
    player.username = params[:username]
    player.password = @password
    player.save!
    self.status = :created
  end

  private

  def random_password
    rand(36 ** 10).to_s(36)
  end

end


