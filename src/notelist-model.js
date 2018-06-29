(function(exports, $) {
  function NoteList() {
    this.notesArray = [];


NoteList.prototype.add = function(text) {
  this.notesArray.push(text);
};

  };

  exports.NoteList = NoteList;
  // this is the window - JQuery is the library
})(this, jQuery);
