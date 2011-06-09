class FilterToolbarsExtension < Radiant::Extension
  version     RadiantFilterToolbarsExtension::VERSION
  description RadiantFilterToolbarsExtension::DESCRIPTION
  url         RadiantFilterToolbarsExtension::HOMEPAGE

  def activate
    Admin::PagesController.class_eval do
      before_filter :include_assets

      def include_assets
        include_stylesheet 'admin/filter-toolbars'

        %w(
          admin/filter_toolbars/control.textarea 
          admin/filter_toolbars/control.textarea.textile 
          admin/filter_toolbars/control.textarea.markdown 
          admin/filter_toolbars/filter-toolbars).each { |file| include_javascript file }
      end
    end
  end
end
