module RadiantFilterToolbarsExtension
  module Controllers
    module Admin
      module PagesController
        def self.included(base)
          base.class_eval do
            before_filter :filter_toolbar_assets, :only => [:new, :edit]

            private

            def filter_toolbar_assets
              @javascripts << 'admin/filter_toolbars/control/control.textarea.js'
              @javascripts << 'admin/filter_toolbars/control/control.textarea.textile.js'
              @javascripts << 'admin/filter_toolbars/control/control.textarea.markdown.js'
              @javascripts << 'admin/filter_toolbars/filter_toolbars.js'
              @stylesheets << 'admin/filter_toolbars.css'
            end
          end
        end
      end
    end
  end
end
