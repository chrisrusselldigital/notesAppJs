(function() {

    var note1 = Note();
    var note2 = Note();

    note1.setText("test_01");
    note2.setText("test_02")

    assert.isTrue(note1.getText() === "<p>test_01</p>");
    assert.isTrue(note2.getText() === "<p>test_02</p>");

})();

// (function() {

//     var note = new Note("My favourite language is JavaScript");

//     assert.isTrue(note.text === "My favourite language is JavaScript");

// })();