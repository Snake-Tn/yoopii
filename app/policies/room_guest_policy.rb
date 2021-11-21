class RoomGuestPolicy < ApplicationPolicy

  def destroy?
    record.player == user ||
      record.room.host == user
  end

  def create?
    record.host != user &&
      !record.guests.include?(user)
  end
end
