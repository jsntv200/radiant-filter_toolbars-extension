FilterToolBars.Textile = Object.extend({
  bold: function() {
    FilterToolBars.textarea.wrapSelection('*', '*');
  },

  italics: function() {
    FilterToolBars.textarea.wrapSelection('_', '_');
  },

  h1: function() {
    FilterToolBars.textarea.insertBeforeSelection('h1. ');
  },

  h2: function() {
    FilterToolBars.textarea.insertBeforeSelection('h2. ');
  },

  h3: function() {
    FilterToolBars.textarea.insertBeforeSelection('h3. ');
  },

  h4: function() {
    FilterToolBars.textarea.insertBeforeSelection('h4. ');
  },

  ordered: function() {
    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      return event.shiftKey ? (line.match(/^\#{2,}/) ? line.replace(/^\#/,'') : line.replace(/^\#\s/,'')) : (line.match(/\#+\s/) ? '#' : '# ') + line;
    });
  },

  unordered: function() {
    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      return event.shiftKey ? (line.match(/^\*{2,}/) ? line.replace(/^\*/,'') : line.replace(/^\*\s/,'')) : (line.match(/\*+\s/) ? '*' : '* ') + line;
    });
  },

  link: function() {
    var selection = FilterToolBars.textarea.getSelection() || 'Link Text',
        response  = prompt('Enter Full URL: (http:// or mailto:)', '');

    if (response && response.match(/^((f|ht)tps?|mailto)/)) {
      FilterToolBars.textarea.replaceSelection('"' + selection + '":' + response.replace(/^(?!(f|ht)tps?:\/\/)/, 'http://'));
    }
  },

  quote: function() {
    FilterToolBars.textarea.collectFromEachSelectedLine( function(line) {
      return event.shiftKey ? line.replace(/^bq. /,'') : 'bq. ' + line;
    });
  }
}, FilterToolBars.Filters);
