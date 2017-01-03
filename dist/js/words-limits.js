$(document).ready(function () {

    //Maximum word length
    var wordLen = 300,
        len; // Maximum word length
    $('#comment_body').keydown(function(event) {
        len = $('#comment_body').val().split(/[\s]+/);
        if (len.length > wordLen) {
            if ( event.keyCode == 46 || event.keyCode == 8 ) {// Allow backspace and delete buttons
            } else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
                event.preventDefault();
            }
        }
        //console.log(len.length + " words are typed out of an available " + wordLen);
        //wordsLeft = (wordLen) + len.length;
        wordsLeft = len.length;
        $('.words-left').html(wordsLeft+ '/300');
        if(wordsLeft >= 300) {
            $('.words-left').addClass('text-danger');
        }
        else{
            $('.words-left').removeClass('text-danger');
        }
    });
});