module Success
  extend ActiveSupport::Concern

  def success user
    render json: {
        message: "User #{user.name} has been deleted",
        status: 200
      }, status: :ok
  end
end
