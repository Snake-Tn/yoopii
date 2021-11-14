ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  # parallelize(workers: :number_of_processors)
  parallelize(workers: 1)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...

  def current_player
    return @current_player if @current_player

    @current_player = Player.new
    @current_player.username = 'username1'
    @current_player.password = 'password1'
    @current_player.save!
    @current_player
  end

  def access_token
    return @access_token if @access_token

    @access_token = authenticate
  end

  private

  def authenticate
    post '/api/authenticate', params: {
      username: current_player.username,
      password: 'password1'
    }
    assert_response :success
    response.body
  end
end
