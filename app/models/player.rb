class Player < ApplicationRecord
  include BCrypt

  validates :username, presence: { strict: true }, uniqueness: { strict: true }
  validates :password, presence: { strict: true }

  def password=(password)
    self.password_hash = Password.create(password)
  end

  def password
    Password.new password_hash
  end
end
