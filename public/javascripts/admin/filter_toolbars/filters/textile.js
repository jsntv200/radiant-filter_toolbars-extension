FilterToolBars.Textile = {
  bold: function() {
    FilterToolBars.textarea.wrapSelection('*', '*');
  },

  italics: function() {
    FilterToolBars.textarea.wrapSelection('_', '_');
  },

  h1: function() {
    return heading('h1');
  },

  h2: function() {
    return heading('h2');
  },

  h3: function() {
    return heading('h3');
  },

  h4: function() {
    return heading('h4');
  },

  ordered: function() {
    FilterToolBars.textarea.injectEachSelectedLine(function(lines, line) {
      if (line.match(/^\#+\s/)) {
        lines.push(line.replace(/^(\#+\s)/, ''));
      } else if (line.match(/^\*+\s/)) {
        lines.push(line.replace(/\*/, '#'));
      } else {
        lines.push('# ' + line);
      }

      return lines;
    });
  },

  unordered: function() {
    FilterToolBars.textarea.injectEachSelectedLine(function(lines,line){
      if (line.match(/^\*+\s/)) {
        lines.push(line.replace(/^(\*+\s)/, ''));
      } else if (line.match(/^\#+\s/)) {
        lines.push(line.replace(/\#/, '*'));
      } else {
        lines.push('* ' + line);
      }

      return lines;
    });
  },

  link: function() {
    var selection = FilterToolBars.textarea.getSelection() || 'Link Text',
        response  = prompt('Enter Full URL: (http:// or mailto:)', '');

    if (response && response.match(/^((f|ht)tps?|mailto)/)) {
      FilterToolBars.textarea.replaceSelection('"' + selection + '":' + response.replace(/^(?!(f|ht)tps?:\/\/)/, 'http://'));
    }
  },

  image: function() {
    return false;
  },

  quote: function() {
    FilterToolBars.textarea.injectEachSelectedLine(function(lines,line){
      if (line.match(/(p|h[1-6]|bq)(>|=|<|<>)?\. /)) {
        lines.push(line.replace(/(p|h[1-6]|bq)(>|=|<|<>)?\. /, 'bq$2. '));
      } else if (line.match(/^\s*$/)) { // safari bug
        lines.push(line);
      } else {
        lines.push('bq. ' + line);
      }

      return lines;
    });
  },

  help: function() {
    page_part = this.element.up('.page').readAttribute('data-caption');
    loadFilterReference(page_part);
  },

  heading: function(tag) {
    if (line.match(/(p|h[1-6]|bq)(>|=|<|<>)?\. /)) {
      lines.push(line.replace(/(p|h[1-6]|bq)(>|=|<|<>)?\. /, tag + '$2. '));
    } else if (line.match(/^\s*$/)) { // safari bug 
      lines.push(line);
    } else {
      lines.push(tag + '. ' + line);
    }

    return lines;
  }
}

