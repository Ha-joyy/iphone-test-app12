/*!
 * jQuery lightweight Fly to
 * Author: @ElmahdiMahmoud
 * Licensed under the MIT license
 */

// self-invoking
;(function ($, window, document, undefined) {
    $.fn.flyto = function ( options ) {
        
    // Establish default settings
        
        var settings = $.extend({
            item      : '.flyto-item',
            target    : '.flyto-target',
            button    : '.flyto-btn',
            shake     : true
        }, options);
        
        
        return this.each(function () {
            var 
                $this    = $(this),
                flybtn   = $this.find(settings.button),
                target   = $(settings.target),
                itemList = $this.find(settings.item);
            
        flybtn.on('click', function () {
            var _this = $(this),
                eltoDrag = _this.parent().find("img").eq(0);
        if (eltoDrag) {
            var imgclone = eltoDrag.clone()
                .offset({
                top: eltoDrag.offset().top+20,
                left: eltoDrag.offset().left+20
            })
                .css({
                    'opacity': '1',
                    'position': 'absolute',
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2,
                    'z-index': '99999999',
                    'border-radius':'50%',
                    'border':'1px solid black'
            })
                .appendTo($('body'))
                .animate({
                    'top': target.offset().top + 10,
                    'left': target.offset().left + 15,
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2,
            }, 1200, 'easeInOutExpo');
            
            if (settings.shake) {
            setTimeout(function () {
                target.effect("shake", {
                    times: 2
                }, 100);
            }, 1600);
            }

    
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
        });
        });
    }
})(jQuery, window, document);