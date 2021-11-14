require "test_helper"

class Api::AuthControllerTest < ActionDispatch::IntegrationTest

  test 'authenticate a guest player' do
    post '/api/authenticate', params: {
      username: current_player.username,
      password: 'password1'
    }
    assert_response :success
    assert_not_empty response.body
  end

end
