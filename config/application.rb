require_relative "boot"

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module OurOrder
  class Application < Rails::Application
    config.load_defaults 6.1
    config.api_only = true
    # Custom directories with classes and modules you want to be autoloadable.
    config.autoload_paths += Dir["#{config.root}/lib/**/"]
    # Config I18n
    I18n.available_locales = %i(en vi)
    config.i18n.default_locale = :vi
    config.i18n.load_path = Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
  end
end
