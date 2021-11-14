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
    room = JSON.parse(response.body)

    assert_equal(1, Room.count)
    created_room = Room.find(room['id'])
    assert_equal 'title1', created_room.title
    assert_equal 'desc1', created_room.description
    assert_equal current_player, created_room.host
  end

  test 'host join his existent room as a guest' do
    room = Room.new({ host: current_player, title: 'title1' })
    room.save!

    post "/api/rooms/#{room.id}/guests", headers: {
      Authorization: 'Bearer ' + access_token
    }
    assert_response :bad_request
  end

  test 'join existent room as a guest' do
    # room = Room.new({ host: current_player, title: 'title1' })
    # room.save!
    #
    # post "/api/rooms/#{room.id}/guests", headers: {
    #   Authorization: 'Bearer ' + access_token
    # }
    # assert_response :bad_request
  end

end
