(function(win, doc,$){
    var Note= (function(){
            var _text;

            function _makeTag(msg){
                _text= "<p>" + msg + "</p>";
            };


        function setText(msg){
            _makeTag(msg);
        };

        function getText(){
            return _text;
        };

        return {
                setText : setText,
                getText : getText,
        };
    }); 

    if(!win.Note) win.Note = Note;
})(window, document,jQuery);



// (function(exports) {
//   function Note(txt) {
//     this.text = txt;
//   };

//   Note.prototype.Text = function () {
//     return this.text;
//   };

//   exports.Note = Note;
// })(this);