

$(window).on('load', function () {
    // code here
});


// navSearchNone
jQuery(function ($) {

    "use strict";
    $(".btnToggle").on('click', function (e) {
        e.preventDefault();
        console.log('btnToggle');
        $(".menuitems").slideToggle('slow');
        $(".input-search").css('display', 'none');

    });
    $(document).on('click', function (e) {
        e.preventDefault();
        var trigger = $(".altho-navWrp");
        var trigger_search = $(".search-form-wrp");
        if (trigger !== e.target && !trigger.has(e.target).length) {
            $(".menuitems").slideUp("slow");
        }
        if (!trigger_search.is(e.target) && trigger_search.has(e.target).length === 0) {
            $(".input-search").slideUp("slow");
        }
    });
    $(".searchI").on('click', function (e) {
        e.preventDefault();
        console.log('searchI');
        $(".input-search").slideToggle();
        $(".menuitems").slideUp("slow");
    });
    $(".msearchToggle").on('click', function (e) {
        e.preventDefault();
        console.log('msearchToggle');
        $(".mInput-search").slideToggle();
    });

    $('.menu-item').click(function (e) {
        if ($('.sub-menu', this).length >= 1) {
            e.preventDefault();
        }

        $(this).siblings().find('> .sub-menu').removeClass('open');
        $(this).find('> .sub-menu').addClass("open");
        e.stopPropagation();
    });

    $('.back').click(function (e) {
        //$(this).closest('.sub-menu').removeClass('open');
        $('.sub-menu').removeClass('open');
        e.stopPropagation();
    })
});
