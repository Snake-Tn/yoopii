class Api::AuthController < ApplicationController

  skip_before_action :authorize, only: [:authenticate]

  def authenticate
    params.require(%i[username mode])

    if params[:mode] == 'guest'
      player = Player.new
      player.username = params[:username]
      player.save
    end

    token = JWT.encode(player.to_json, Figaro.env.jwt_encryption_key, 'HS256')

    render json: token
  end
end