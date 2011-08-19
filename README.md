# Filter Toolbars

Adds a textile or markdown WYSIWYG filter to the admin textareas using Control.TextArea [http://livepipe.net/control/textarea]

If the Clipped asset manager extension is installed then the image button will launch the assets manager.


## TODO

- Refactor duplicated filter functions
- Implement SmartyPants


## Installation

This has only been tested on Radiant v1.0.0 +

Add the gem to your Gemfile :

```
gem "radiant-filter_toolbars-extension", "~> 1.0.3"
```

Update your bundle :

```
$ bundle install
```

Run the update task :

```
rake radiant:extensions:update_all
```
