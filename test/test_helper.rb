ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase

  include FactoryBot::Syntax::Methods

  parallelize(workers: 1)


  def current_player
    return @current_player if @current_player

    @current_player = create :player, password: :my_password
  end

  def auth_header
    { Authorization: "Bearer #{access_token}" }
  end

  def access_token
    return @access_token if @access_token

    post api_tokens_path, params: {
      username: current_player.username,
      password: :my_password
    }
    assert_response :created
    @access_token = JSON.parse(response.body)['token']
  end

end
