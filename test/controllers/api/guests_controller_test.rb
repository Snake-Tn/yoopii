require 'test_helper'

class Api::GuestsControllerTest < ActionDispatch::IntegrationTest

  test 'create - join' do
    room = create :room
    post api_room_guests_path(room.id), headers: auth_header
    assert_response :success
    assert_equal 1, room.guests.size
  end

  test 'create - unauthenticated' do
    room = create :room
    post api_room_guests_path(room.id)
    assert_response :unauthorized
  end

  test 'destroy - leave' do
    room = create :room
    room.join(current_player)

    delete api_room_guest_path(room.id, current_player.id), headers: auth_header
    assert_response :success
    assert_equal 0, room.guests.size
  end

  test 'destroy - leave non joined' do
    room = create :room
    delete api_room_guest_path(room.id, current_player.id), headers: auth_header
    assert_response :not_found
  end

  test 'destroy - kick' do
    room = create :room, host: current_player
    guest = create :player
    room.join(guest)

    delete api_room_guest_path(room.id, guest.id), headers: auth_header
    assert_response :success
    assert_equal 0, room.guests.size
  end

  test 'destroy - kick - not authorized' do
    room = create :room
    guest = create :player
    room.join(guest)

    delete api_room_guest_path(room.id, guest.id), headers: auth_header
    assert_response :forbidden

  end

end