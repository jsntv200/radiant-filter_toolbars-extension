# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application_controller'
require 'radiant-filter_toolbars-extension/version'
class FilterToolbarsExtension < Radiant::Extension
  version RadiantFilterToolbarsExtension::VERSION
  description "Adds filter_toolbars to Radiant."
  url "http://yourwebsite.com/filter_toolbars"
  
  # extension_config do |config|
  #   config.gem 'some-awesome-gem
  #   config.after_initialize do
  #     run_something
  #   end
  # end

  # See your config/routes.rb file in this extension to define custom routes
  
  def activate
    # tab 'Content' do
    #   add_item "Filter Toolbars", "/admin/filter_toolbars", :after => "Pages"
    # end
  end
end
