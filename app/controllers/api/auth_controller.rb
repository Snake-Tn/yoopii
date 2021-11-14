class Api::AuthController < ApplicationController

  skip_before_action :authorize, only: [:authenticate]
  include BCrypt

  def authenticate
    params.require(%i[username password])

    player = Player.find_by({ username: params[:username] })

    return head :unauthorized unless player && player.password == params[:password]

    token = JWT.encode({ id: player.id, username: player.username }, Figaro.env.jwt_encryption_key, 'HS256')

    render json: token
  end
end