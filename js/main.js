$(function () {
    $(this).keydown(function (event) {
        var whiteKey = $(this).find('.white-key[data-key='+event.which+']');
        var blackKey = $(this).find('.black-key[data-key='+event.which+']');
        var audio = $(this).find('audio[data-key='+event.which+']')[0];
        whiteKey.toggleClass('active');
        blackKey.toggleClass('active');
        if(!audio) return;
        audio.play();
        audio.currentTime = 0;
        

    });
    $(this).keyup(function (event) {
        var whiteKey = $(this).find('.white-key[data-key='+event.which+']');
        var blackKey = $(this).find('.black-key[data-key='+event.which+']');
        whiteKey.toggleClass('active');
        blackKey.toggleClass('active');
    });
});