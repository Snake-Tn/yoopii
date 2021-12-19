require 'test_helper'

class Api::RoomsControllerTest < ActionDispatch::IntegrationTest

  test 'not authenticated' do
    post '/api/rooms'
    assert_response :unauthorized
  end

  test 'index' do
    create :room
    create :room
    get api_rooms_path, headers: auth_header
    assert_response :success
    rooms = JSON.parse(response.body)
    assert_equal 2, rooms.count
  end

  test 'create room' do
    game = create :game
    post api_rooms_path, params: {
      title: 'title1',
      description: 'desc1',
      game_id: game.id
    }, headers: auth_header
    assert_response :success
    room = JSON.parse(response.body)

    assert_equal(1, Room.count)
    created_room = Room.find(room['id'])
    assert_equal 'title1', created_room.title
    assert_equal 'desc1', created_room.description
    assert_equal current_player, created_room.host
  end

  test 'create room - already hosting another room' do
    game = create :game
    exisent_room = create :room, host: current_player
    post api_rooms_path, params: {
      title: 'title1',
      description: 'desc1',
      game_id: game.id
    }, headers: auth_header

    assert_raises(ActiveRecord::RecordNotFound) { Room.find(exisent_room.id) }
    assert_equal(1, Room.count)
  end

  test 'create room - already joining another room' do
    game = create :game
    existent_room = (create :room, guests: [current_player])

    post api_rooms_path, params: {
      title: 'title1',
      description: 'desc1',
      game_id: game.id
    }, headers: auth_header

    assert_not existent_room.reload.guests.include? current_player
  end

  test 'delete room - no guests inside' do
    room = create :room, host: current_player

    delete api_room_path(room.id), headers: auth_header
    assert_response :success
    assert_not Room.exists?(room.id)
  end

  test 'delete room - some guests inside' do
    room = create :room, host: current_player, guests: [create(:player)]

    delete api_room_path(room.id), headers: auth_header
    assert_response :success
    assert_not Room.exists?(room.id)
  end

  test 'delete room - not authorized' do
    room = create :room

    delete api_room_path(room.id), headers: auth_header
    assert_response :forbidden
    assert Room.exists?(room.id)
  end

end
