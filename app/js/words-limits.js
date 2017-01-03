$(document).ready(function () {

    //Maximum word length
    var wordLen = 5,
        len; // Maximum word length
    $('#comment_body').keydown(function(event) {
        len = $('#comment_body').val().split(/[\s]+/);
        if (len.length > wordLen) {
            if ( event.keyCode == 46 || event.keyCode == 8 ) {// Allow backspace and delete buttons
            } else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
                event.preventDefault();
            }
        }
        console.log(len.length + " words are typed out of an available " + wordLen);
        wordsLeft = (wordLen) - len.length;
        $('.words-left').html(wordsLeft+ ' words left');
        if(wordsLeft == 0) {
            $('.words-left').css({
                'background':'red'
            }).prepend('<i class="fa fa-exclamation-triangle"></i>');
        }
    });
});