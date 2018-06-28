(function(exports) {
  function Note(txt) {
    this.text = txt;
  };

  Note.prototype.Text = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);