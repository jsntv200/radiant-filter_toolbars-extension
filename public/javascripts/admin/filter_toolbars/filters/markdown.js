FilterToolBars.Markdown = {
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

    FilterToolBars.textarea.injectEachSelectedLine(function(lines, line) {
      if(!line.match(/^\s+$/)){
        ++i;
        lines.push((event.shiftKey ? line.replace(/^\d+\.\s/,'') : (line.match(/\d+\.\s/) ? '' : i + '. ') + line));
      }

      return lines;
    });
  },

  unordered: function() {
    FilterToolBars.textarea.injectEachSelectedLine(function(lines,line){
      lines.push((event.shiftKey ? (line.match(/^\*{2,}/) ? line.replace(/^\*/,'') : line.replace(/^\*\s/,'')) : (line.match(/\*+\s/) ? '*' : '* ') + line));
      return lines;
    });
  },

  link: function() {
    var selection = this.getSelection() || 'Link Text',
        response  = prompt('Enter Full URL: (http:// or mailto:)', '');

    if (response && response.match(/^((f|ht)tps?|mailto)/)) {
      FilterToolBars.textarea.replaceSelection('[' + selection + '](' + response.replace(/^(?!(f|ht)tps?:\/\/)/, 'http://') + ')');
    }
  },

  image: function() {
    return false;
  },

  quote: function() {
    FilterToolBars.textarea.injectEachSelectedLine(function(lines, line) {
      lines.push((event.shiftKey ? line.replace(/^\> /,'') : '> ' + line));
      return lines;
    });
  },

  help: function() {
    page_part = this.element.up('.page').readAttribute('data-caption');
    loadFilterReference(page_part);
  }
}

