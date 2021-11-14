class ApplicationController < ActionController::Base

  before_action :authorize

  skip_before_action :authorize, only: [:home]

  protect_from_forgery with: :null_session

  def authorize
    render json: { error: 'unauthorized' }, status: :unauthorized unless access_token
  end

  private

  def current_player
    return @current_player if @current_player

    @current_player = Player.find access_token[:id]
  end

  def access_token
    access_token = request.headers['Authorization']&.delete_prefix 'Bearer '
    if access_token
      begin
        segments = JWT.decode(access_token, Figaro.env.jwt_encryption_key, true, algorithm: 'HS256')
        segments[0].symbolize_keys
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def home; end
end
