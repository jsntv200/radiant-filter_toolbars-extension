module NavigationHelpers
  
  # Extend the standard PathMatchers with your own paths
  # to be used in your features.
  # 
  # The keys and values here may be used in your standard web steps
  # Using:
  #
  #   When I go to the "filter_toolbars" admin page
  # 
  # would direct the request to the path you provide in the value:
  # 
  #   admin_filter_toolbars_path
  # 
  PathMatchers = {} unless defined?(PathMatchers)
  PathMatchers.merge!({
    # /filter_toolbars/i => 'admin_filter_toolbars_path'
  })
  
end

World(NavigationHelpers)