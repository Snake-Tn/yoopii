require 'test_helper'

class Api::GamesControllerTest < ActionDispatch::IntegrationTest

  test 'index' do
    create :game
    create :game
    get api_games_path, headers: auth_header
    assert_response :success
    games = JSON.parse(response.body)
    assert_equal 2, games.count
  end

end