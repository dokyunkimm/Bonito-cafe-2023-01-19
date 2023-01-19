$(function() {
    var wndScrTp = $(window).scrollTop();
    var wndOtW = $(window).outerWidth();
    var wndOtH = $(window).outerHeight();
    var mobMde = wndOtW > 1024 ? false : true;

    function mobChk(){
        mobMde = wndOtW > 1024 ? false : true;
    }
    mobChk();

    function HdrEvt(){
        if(wndScrTp > 0){
            $('#kwqHdr').addClass('on');
        } else {
            $('#kwqHdr').removeClass('on');
        }

        if($(window).scrollTop() > 0){
            $('#kwqBrdVsl').css('margin-top', $('#kwqHdr').outerHeight() + 'px');
        } else {
            $('#kwqBrdVsl').removeAttr('style');
        }
    }

    

    $(window).scroll(function() {
        wndScrTp = $(window).scrollTop();
        wndOtW = $(window).outerWidth();
        wndOtH = $(window).outerHeight();
        mobChk();
        if(!mobMde){
            HdrEvt();
        }

    });
    $(window).resize(function() {
        wndScrTp = $(window).scrollTop();
        wndOtW = $(window).outerWidth();
        wndOtH = $(window).outerHeight();
        mobChk();
        HdrEvt();
    });
    
    $('#kwqHdr .kwqHdrBtm .kwqInr .kwqMobNav').click(function() {
        $('.kwqMobNavLst').slideToggle();
    });
    $('.kwqMobNavLst > li > a').click(function() {
        $(this).siblings('.kwqMobTwoDpth').slideToggle();
    });

});