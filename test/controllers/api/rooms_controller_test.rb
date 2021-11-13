require "test_helper"

class Api::RoomsControllerTest < ActionDispatch::IntegrationTest

  test "create room - not authenticated" do
    post '/api/rooms', params: {
    }
    assert_response :unauthorized
  end

  test 'create room' do
    post '/api/rooms', params: {
      title: 'title1',
      description: 'desc1'
    }, headers: {
      Authorization: 'Bearer ' + access_token
    }
    assert_response :success

    assert_equal(1, Room.count)
    created_room = Room.all.first
    assert_equal 'title1', created_room.title
    assert_equal 'desc1', created_room.description
    assert_equal current_player, created_room.host
  end

  test 'join an existent room as a guest' do

  end

end
