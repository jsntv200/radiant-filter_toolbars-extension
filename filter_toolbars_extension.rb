require 'radiant-filter_toolbars-extension'
require 'radiant-filter_toolbars-extension/controllers/admin/pages_controller'

class FilterToolbarsExtension < Radiant::Extension
  version     RadiantFilterToolbarsExtension::VERSION
  description RadiantFilterToolbarsExtension::DESCRIPTION
  url         RadiantFilterToolbarsExtension::URL

  def activate
    Admin::PagesController.send :include, RadiantFilterToolbarsExtension::Controllers::Admin::PagesController
  end
end
