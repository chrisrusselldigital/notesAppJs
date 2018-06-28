(function() {

    var note = Note;
    note.setText("My favourite language is JavaScript");

    assert.isTrue(note.getText() === "<p>My favourite language is JavaScript</p>");

})();

// (function() {

//     var note = new Note("My favourite language is JavaScript");

//     assert.isTrue(note.text === "My favourite language is JavaScript");

// })();