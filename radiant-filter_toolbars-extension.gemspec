# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "radiant-filter_toolbars-extension"

Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = "radiant-filter_toolbars-extension"
  s.version     = RadiantFilterToolbarsExtension::VERSION
  s.summary     = RadiantFilterToolbarsExtension::SUMMARY
  s.description = RadiantFilterToolbarsExtension::DESCRIPTION
  s.homepage    = RadiantFilterToolbarsExtension::HOMEPAGE
  s.authors     = ["Jason Taylor"]
  s.email       = ["jsntv200@gmail.com"]

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
