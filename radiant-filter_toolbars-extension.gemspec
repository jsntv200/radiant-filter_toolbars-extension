# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "radiant-filter_toolbars-extension/version"

Gem::Specification.new do |s|
  s.name        = "radiant-filter_toolbars-extension"
  s.version     = RadiantFilterToolbarsExtension::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Your Name"]
  s.email       = ["your email"]
  s.homepage    = "http://yourwebsite.com/filter_toolbars"
  s.summary     = %q{Filter Toolbars for Radiant CMS}
  s.description = %q{Makes Radiant better by adding filter_toolbars!}
  
  ignores = if File.exist?('.gitignore')
    File.read('.gitignore').split("\n").inject([]) {|a,p| a + Dir[p] }
  else
    []
  end
  s.files         = Dir['**/*'] - ignores
  s.test_files    = Dir['test/**/*','spec/**/*','features/**/*'] - ignores
  # s.executables   = Dir['bin/*'] - ignores
  s.require_paths = ["lib"]
  
  s.post_install_message = %{
  Add this to your radiant project with:
    config.gem 'radiant-filter_toolbars-extension', :version => '~>#{RadiantFilterToolbarsExtension::VERSION}'
  }
end