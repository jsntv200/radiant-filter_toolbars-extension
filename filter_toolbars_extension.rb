class FilterToolbarsExtension < Radiant::Extension
  version     RadiantFilterToolbarsExtension::VERSION
  description RadiantFilterToolbarsExtension::DESCRIPTION
  url         RadiantFilterToolbarsExtension::HOMEPAGE

  def activate
    Admin::PagesController.send :include, RadiantFilterToolbarsExtension::Controllers::Admin::PagesController
  end
end
