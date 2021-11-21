ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase

  include FactoryBot::Syntax::Methods

  parallelize(workers: 1)


  # Add more helper methods to be used by all tests here...

  def current_player
    return @current_player if @current_player

    @current_player = create :player, password: :my_password
  end

  def auth_header
    { Authorization: "Bearer #{access_token}" }
  end

  def access_token
    return @access_token if @access_token

    post api_token_path, params: {
      username: current_player.username,
      password: :my_password
    }
    assert_response :success
    @access_token = response.body
  end

end
