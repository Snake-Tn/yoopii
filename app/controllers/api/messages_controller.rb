class Api::MessagesController < ApplicationController

  def create
    message_params = params.permit(:content, :receiver_id)
    @message = Message.new message_params

    @message.sender = current_player
    authorize @message
    @message.save!
    render status: :created
  end

  def index
    @messages = policy_scope(Message).where(receiver_id: params[:room_id])
  end

end