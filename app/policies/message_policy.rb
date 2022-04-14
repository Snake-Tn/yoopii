class MessagePolicy < ApplicationPolicy

  def create?
    record.receiver.players.include? record.sender
  end

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    attr_reader :user, :scope

    def resolve
      scope.all
    end
  end

end
