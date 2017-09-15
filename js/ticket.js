(function ($) {

    'use strict'

    $(function () {
        var $ticket = $('.ticket-wrapper');

        $ticket.click(function (event) {
            $(this).addClass('animate-ticket');
        });
        // $ticket.hammer({ direction: Hammer.DIRECTION_VERTICAL }).bind("swipe", function(){
        //     console.log('swipe');
        // });
    });
})(jQuery);
