class Player < ApplicationRecord
  include BCrypt

  def password= (password)
    self.password_hash = Password.create(password)
  end

  def password
    Password.new password_hash
  end
end
