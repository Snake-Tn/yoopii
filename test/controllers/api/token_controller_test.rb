require "test_helper"

class Api::TokenControllerTest < ActionDispatch::IntegrationTest

  test 'create a token' do
    post api_token_path, params: {
      username: current_player.username,
      password: :my_password
    }
    assert_response :success
    assert_not_empty response.body
  end

  test 'create a token - bad password' do
    post api_token_path, params: {
      username: current_player.username,
      password: 'bad_password'
    }
    assert_response :unauthorized
  end

  test 'create a token - not found username' do
    post api_token_path, params: {
      username: 'not_found_username',
      password: 'bad_password'
    }
    assert_response :not_found
  end

end
