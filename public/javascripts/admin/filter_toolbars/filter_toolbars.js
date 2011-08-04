var FilterToolBars = {
  filter: null,
  toolbar: null,
  textarea: null,
  className: 'filter_toolbar',
  buttons: [
    { title: 'Bold', slug: 'bold' },
    { title: 'Italics', slug: 'italics' },
    { title: 'Heading 1', slug: 'h1' },
    { title: 'Heading 2', slug: 'h2' },
    { title: 'Heading 3', slug: 'h3' },
    { title: 'Heading 4', slug: 'h4' },
    { title: 'Ordered List', slug: 'ordered' },
    { title: 'Unordered List', slug: 'unordered' },
    { title: 'Link', slug: 'link' },
    { title: 'Image', slug: 'image', attrs: {href:'#attach_asset'}},
    { title: 'Block Quote', slug: 'quote' },
    { title: 'Help', slug: 'help' }
  ],

  update_filter: function(filter) {
    this.filter = filter || null;

    // Just use Markdown for Smartypants
    if (this.filter == "SmartyPants") {
      this.filter = "Markdown";
    }

    this.filter == null ? this.hide() : this.show();
  },

  click: function(tag) {
    this[this.filter][tag]();
  },

  show: function() {
    this.toolbar.show();
  },

  hide: function() {
    this.toolbar.hide();
  }
}


FilterToolBars.Filters = {
  image: function() {
    return false;
  },

  help: function() {
    page_part = FilterToolBars.textarea.element.up('.page').readAttribute('data-caption');
    loadFilterReference(page_part);
  }
}


FilterToolBars.AttachBehavior = Behavior.create({
  initialize: function(options) {
    this.textarea = new Control.TextArea(this.element);
    this.toolbar  = new Control.TextArea.ToolBar(this.textarea);
    this.toolbar.container.id        = this.element.id + '_toolbar';
    this.toolbar.container.className = FilterToolBars.className;
    this.attach();
  },

  attach: function() {
    FilterToolBars.buttons.each( function(button) {
      var attributes = Object.extend({ className: 'button_' + button.slug, title: button.title }, button.attrs || {})
      this.toolbar.addButton(button.title, function() { this.click(button.slug) }.bind(this), attributes);
    }.bind(this));

    if (this.element.up('.page').visible()) {
      FilterToolBars.textarea = this.textarea;
    }
  },

  click: function(tag) {
    FilterToolBars.textarea = this.textarea;
    FilterToolBars.click(tag);
  }
});


FilterToolBars.TabBehavior = Behavior.create({
  initialize: function(options) {
    this.element.observe('click', this.change.bind(this));
    this.element.observe('init:click', this.change.bind(this));


    if (this.element.hasClassName('here')) {
      this.element.fire('init:click');
      this.element.stopObserving('init:click');
    }
  },

  change: function(event) {
    var e = event.findElement('.tab');

    if (e) {
      var page   = TabControls.tab_control.findTabByElement(e).page;
      var filter = page.down('select').getValue();

      FilterToolBars.toolbar = page.down('.filter_toolbar');
      FilterToolBars.update_filter(filter);
    }
  }
});


FilterToolBars.SelectBehavior = Behavior.create({
  initialize: function(options) {
    this.element.observe('change', this.change.bind(this));

    if (this.element.up('.page').visible()) {
      this.change();
    }
  },

  change: function(event) {
    var filter = this.element.getValue();
    FilterToolBars.update_filter(filter);
  }
});


Event.addBehavior({
  '.part textarea' : FilterToolBars.AttachBehavior(),
  '.tabs .tab'     : FilterToolBars.TabBehavior(),
  '.part select'   : FilterToolBars.SelectBehavior(),
  '.button_image'  : Popup.TriggerBehavior()
});
