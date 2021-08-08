class ApplicationRecord < ActiveRecord::Base
  include LazyLookupI18n
  self.abstract_class = true
end
