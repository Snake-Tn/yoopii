require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest

  test 'create - not authorized' do
    room = create :room

    post api_messages_path, params: {

      receiver_id: room.id

    }, headers: auth_header

    assert_response :forbidden
  end

  test 'create - sent by host' do
    room = create :room, host: current_player

    post api_messages_path, params: {

      receiver_id: room.id

    }, headers: auth_header

    assert_response :created
  end

  test 'create - sent by a guest' do
    room = create :room, guests: [current_player]

    post api_messages_path, params: {

      receiver_id: room.id

    }, headers: auth_header

    assert_response :created
  end

  test 'index - not authorized' do
    room = create :room
    sender = create :player

    create :message, content: 'hello there :)', sender: sender, receiver: room

    get api_messages_path({ room_id: room.id }), headers: auth_header

    assert_response :success
    rooms = JSON.parse(response.body)
    assert_equal 1, rooms.count
    assert_equal rooms[0]['content'], 'hello there :)'
  end
end
