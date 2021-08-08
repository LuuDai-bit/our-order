class UsersController < ApplicationController
  before_action :user_params, only: %i(create update)
  before_action :load_user, only: %i(show update destroy)

  def index
    @users = User.page(params[:page]).per params[:per]
    render json: @users
  end

  def show; end

  def create
    @user = User.create user_params
    if @user.errors.blank?
      render json: @user
    else
      bad_request_error I18n.t('invalid_params'), @user.errors.messages
    end
  end

  def update
    if @user.update user_params
      render json: @user
    else
      bad_request_error 'Invalid params', @user.errors.messages
    end
  end

  def destroy
    if @user.destroy
      success @user
    else
      bad_request_error 'Error when delete'
    end
  end

  private

  def user_params
    params.require(:user).permit User::USER_PARAMS
  end

  def load_user
    @user = User.find_by id: params[:id]

    return if @user

    bad_request_error t('.errors_messages.not_found')
  end
end
