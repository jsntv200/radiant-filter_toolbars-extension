# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "radiant-filter_toolbars-extension"

Gem::Specification.new do |s|
  s.name        = "radiant-filter_toolbars-extension"
  s.version     = RadiantFilterToolbarsExtension::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = RadiantFilterToolbarsExtension::AUTHORS
  s.email       = RadiantFilterToolbarsExtension::EMAIL
  s.homepage    = RadiantFilterToolbarsExtension::URL
  s.summary     = RadiantFilterToolbarsExtension::SUMMARY
  s.description = RadiantFilterToolbarsExtension::DESCRIPTION

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
