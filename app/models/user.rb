class User < ApplicationRecord
  USER_PARAMS = %i(name email birthday phone_number role_id)
  PHONE_NUMBER_REGEX = /\\A(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}\\z/

  belongs_to :role

  validates :name, presence: true, length: { minimum: 2, maximum: 50 }
  validate :validate_age
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone_number, presence: true, format: { with: PHONE_NUMBER_REGEX }

  private

  def validate_age
    if birthday.present? && birthday > 16.years.ago
      errors.add :birthday, t('.validate.age_restriction')
    end
  end
end
