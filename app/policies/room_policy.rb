class RoomPolicy < ApplicationPolicy

  def destroy?
    record.host == user
  end

end
