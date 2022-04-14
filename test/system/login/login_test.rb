require "application_system_test_case"

class LoginTest < ApplicationSystemTestCase
  describe 'login' do
    before do
      visit '/'
    end
    it 'show one input' do
      assert_field 'username'
    end
    it 'create account and login' do
      fill_in 'username', with: 'user1'
      find_field('username').send_keys(:enter)
      assert_text 'New room'
    end
  end

end
