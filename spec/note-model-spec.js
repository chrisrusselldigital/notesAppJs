// (function() {
//
//     var note1 = Note();
//     var note2 = Note();
//
//     note1.setText("test_01");
//     note2.setText("test_02");
//
//     assert.isTrue(note1.getText() === "<p>test_01</p>");
//     assert.isTrue(note2.getText() === "<p>test_02</p>");
//
// })();

(function() {

    var note1 = new Note("My favourite language is JavaScript");
    var note2 = new Note("This is another test");

    assert.isTrue("set text 1", note1.text === "My favourite language is JavaScript");
    assert.isTrue("set text 2", note2.text === "This is another test");

})();


(function() {

  var note1 = new Note("My favourite language is JavaScript");
  var note2 = new Note("This is another test");

  var notelist = new NoteList();
  notelist.add(note1);
  notelist.add(note2);
  assert.isTrue("add a note to note list", notelist.notesArray[0] === note1);
  assert.isTrue("add a 2nd note to note list", notelist.notesArray[1] === note2);

})();
