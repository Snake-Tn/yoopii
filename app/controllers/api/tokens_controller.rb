class Api::TokensController < ApplicationController

  skip_before_action :authenticate, only: [:create]
  include BCrypt

  def create
    params.require(%i[username password])

    player = Player.find_by!({ username: params[:username] })

    return head :unauthorized unless player && player.password == params[:password]

    @token = JWT.encode({ id: player.id, username: player.username }, Figaro.env.jwt_encryption_key, 'HS256')
    render status: :created
  rescue ActiveRecord::RecordNotFound
    head :not_found
  end
end