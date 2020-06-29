class SuperherosChannel < ApplicationCable::Channel
  def subscribed
    stream_from "superheros"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
