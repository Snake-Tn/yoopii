require "test_helper"

class PlayersControllerTest < ActionDispatch::IntegrationTest

  def test_create_player_guest_mode
    post api_players_path, params: {
      username: 'username1',
      mode: 'guest'
    }

    assert_response :created
    response_body = JSON.parse(response.body)

    assert_not_empty response_body['password']

    player = Player.find_by({username: 'username1' })
    assert_not_nil player
  end
end
