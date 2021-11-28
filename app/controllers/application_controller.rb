class ApplicationController < ActionController::Base

  include Pundit

  before_action :authenticate

  skip_before_action :authenticate, only: [:show]

  protect_from_forgery with: :null_session

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def authenticate
    render json: { error: 'unauthorized' }, status: :unauthorized unless access_token
  end

  def show
    redirect_to '/' if params.has_key? "any"
  end

  private

  def user_not_authorized
    head :forbidden
  end

  def current_player
    return @current_player if @current_player

    @current_player = Player.find access_token[:id]
  end

  def current_user
    current_player
  end

  def access_token
    access_token = request.headers['Authorization']&.delete_prefix 'Bearer '
    return nil unless access_token

    begin
      segments = JWT.decode(access_token, Figaro.env.jwt_encryption_key, true, algorithm: 'HS256')
      segments[0].symbolize_keys
    rescue JWT::DecodeError
      nil
    end
  end

end
