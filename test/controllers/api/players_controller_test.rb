require "test_helper"

class PlayersControllerTest < ActionDispatch::IntegrationTest

  def test_create_player
    post api_players_path, params: {
      username: 'username1',
      password: 'password1'
    }

    assert_response :created
    player = Player.find_by({ username: 'username1' })

    response_body = JSON.parse(response.body)
    assert_equal player.id, response_body['id']

    assert_not_nil player
  end
end
