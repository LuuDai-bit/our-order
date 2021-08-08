module Errors
  extend ActiveSupport::Concern

  def bad_request_error(message, error_object_messages = [])
    render json: {
      error: message,
      error_messages: error_object_messages,
      status: 400
    }, status: :bad_request
  end
end
