# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "radiant-filter_toolbars-extension/version"

Gem::Specification.new do |s|
  s.name        = "radiant-filter_toolbars-extension"
  s.version     = RadiantFilterToolbarsExtension::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Jason Taylor"]
  s.email       = ["jsntv200@gmail.com"]
  s.homepage    = "https://github.com/jsntv200/radiant-filter_toolbars-extension"
  s.summary     = %q{WYSIWYG Toolbar for Radiant CMS}
  s.description = %q{Adds a WYSIWYG toolbar for the textile and markdown filters.}

  ignores = if File.exist?('.gitignore')
    File.read('.gitignore').split("\n").inject([]) {|a,p| a + Dir[p] }
  else
    []
  end

  s.files         = Dir['**/*'] - ignores
  s.test_files    = Dir['test/**/*','spec/**/*','features/**/*'] - ignores
  s.require_paths = ["lib"]

  s.post_install_message = %{
  Add this to your radiant project with:
    config.gem 'radiant-filter_toolbars-extension', :version => '~>#{RadiantFilterToolbarsExtension::VERSION}'
  }
end
