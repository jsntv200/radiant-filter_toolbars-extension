FilterToolBars.Markdown = Object.extend({
  bold: function() {
    FilterToolBars.textarea.wrapSelection('**', '**');
  },

  italics: function() {
    FilterToolBars.textarea.wrapSelection('*', '*');
  },

  h1: function() {
    FilterToolBars.textarea.insertBeforeSelection('# ');
  },

  h2: function() {
    FilterToolBars.textarea.insertBeforeSelection('## ');
  },

  h3: function() {
    FilterToolBars.textarea.insertBeforeSelection('### ');
  },

  h4: function() {
    FilterToolBars.textarea.insertBeforeSelection('#### ');
  },

  ordered: function() {
    var i = 0;

    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      if (!line.match(/^\s+$/)) {
        ++i;
        return event.shiftKey ? line.replace(/^\d+\.\s/,'') : (line.match(/\d+\.\s/) ? '' : i + '. ') + line;
      }
    });
  },

  unordered: function() {
    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      return event.shiftKey ? (line.match(/^\*{2,}/) ? line.replace(/^\*/,'') : line.replace(/^\*\s/,'')) : (line.match(/\*+\s/) ? '*' : '* ') + line;  
    });
  },

  link: function() {
    var selection = this.getSelection() || 'Link Text',
        response  = prompt('Enter Full URL: (http:// or mailto:)', '');

    if (response && response.match(/^((f|ht)tps?|mailto)/)) {
      FilterToolBars.textarea.replaceSelection('[' + selection + '](' + response.replace(/^(?!(f|ht)tps?:\/\/)/, 'http://') + ')');
    }
  },

  quote: function() {
    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      return event.shiftKey ? line.replace(/^\> /,'') : '> ' + line;
    });
  }
}, FilterToolBars.Filters);
