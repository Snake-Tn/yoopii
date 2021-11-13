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
  def access_token
    post '/api/authenticate', params: {
      username: 'username1',
      mode: 'guest'
    }
    assert_response :success
    response.body
  end
  def current_player
    Player.find_by(username: 'username1')
  end
end
