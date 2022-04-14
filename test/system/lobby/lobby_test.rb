require "application_system_test_case"

class LobbyTest < ApplicationSystemTestCase

  describe 'create a room' do

    before do
      create :game, name: 'game1'
      login('user1')
    end

    it 'shows create room form' do
      assert_text 'New room'
      assert_field 'title'
      assert_field 'description'
      assert_field 'game_id'
    end

    it 'creates a new room' do
      fill_in 'title', with: 'title1'
      fill_in 'description', with: 'description1'
      find_field('game_id').click
      find_field('game_id').send_keys(:down)

      find_button('Host').click

      sleep 1

    end
  end

  private

  def login(username)
    visit '/'
    fill_in 'username', with: username
    find_field('username').send_keys(:enter)
  end

end
