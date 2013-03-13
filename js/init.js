$(document).ready( function() {
    initJsonVersion();
    initVolumeSlider();

    clearNonPlayingPlaylist(function() {
        initVideoButton();
        initFavouritesTable();
        initQueueCount();
        initRepeatMode();
    });

    $('#previousBtn').click(function() {playerGoPrevious()});
    $('#rewindBtn').click(function() {playerSeek('smallbackward')});
    $('#stopBtn').click(function() {doAction(actions.Stop, function(){onChangeUpdate()});});
    $('#playBtn').click(function() {doAction(actions.PlayPause, function(){onChangeUpdate()})});
    $('#fastForwardBtn').click(function() {playerSeek('smallforward')});
    $('#nextBtn').click(function() {playerGoNext()});

    $('#playCurrentVideoButton').click(function() {playCurrentUrl($(this))});
    $('#queueVideoButton').click(function() {queueCurrentUrl($(this))});
    $('#addToFavButton').click(function() {addToFavourites()});
    $('#repeatButton').click(function() {toggleRepeat()});
    $('#clearPlaylistButton').click(function() {clearPlaylist()});
//    $('#testBtn').click(function() { initQueueCount() });

    if (!hasUrlSetup()) {
        $('#setupTooltip').css("display", "block");
    }

});
