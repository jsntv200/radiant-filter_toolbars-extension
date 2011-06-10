var FilterToolBars = {
  className: 'filter_toolbar',
  textarea:  null,
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
  ]
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
  },

  click: function(tag) {
    FilterToolBars.textarea = this.textarea;
    FilterToolBars[this.filter()][tag]();
  },

  filter: function() {
    return this.element.up('.part').down('select').getValue();
  },

  show: function() {
    this.toolbar.show();
  },

  hide: function() {
    this.toolbar.hide();
  }
});

FilterToolBars.ChangeBehavior = Behavior.create({
  initialize: function(options) {
    this.change();
    this.element.observe('change', this.change.bind(this));
  },

  change: function() {
    FilterToolBars.filter = this.element.getValue()
  }
});

Event.addBehavior({
  '.part select'    : FilterToolBars.ChangeBehavior(),
  '.part .textarea' : FilterToolBars.AttachBehavior(),
  'a.button_image'  : Popup.TriggerBehavior()
});

