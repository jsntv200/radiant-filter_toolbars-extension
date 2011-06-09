class FilterToolbarsExtension < Radiant::Extension
  version     RadiantFilterToolbarsExtension::VERSION
  description RadiantFilterToolbarsExtension::DESCRIPTION
  url         RadiantFilterToolbarsExtension::HOMEPAGE

  def activate
    Admin::PagesController.send :include, RadiantFilterToolbarExtension::Controllers::Admin::PagesController
  end
end
