# Filter Toolbars

Adds a textile or markdown WYSIWYG filter to the admin textareas using Control.TextArea [http://livepipe.net/control/textarea]

If the Clipped asset manager extension is installed then the image button will launch the assets manager.


## TODO

- Refactor duplicated filter funtions
- Implement SmartyPants


## Installation

This has only been tested on Radiant v1.0.0 +

Install as a gem :

```
gem install radiant-filter_toolbars-extension
```

Include the gem in your environment.rb :

```
config.gem 'radiant-filter_toolbars-extension', :version => '~>1.0.0'
```

Run the update task :

```
rake radiant:extensions:filter_toolbars:update
```
