require "test_helper"

class Api::AuthControllerTest < ActionDispatch::IntegrationTest

  test "authenticate a guest player" do
    post '/api/authenticate', params: {
      username: 'username1',
      mode: 'guest'
    }
    assert_response :success
  end

end
