/**
HoverTitle jQuery Plugin
Built with Love by Honore HOUNWANOU
Be free guys to play with it.
Copyright 2014 - Les TEACHERS DU NET 
**/

//Object.create Utility
if (typeof Object.create !== 'function') {
    Object.create = function(arg) {
        if (!arg) {
            return {};
        }

        function obj() {};

        obj.prototype = arg;
        return new obj();
    }
}

(function($, document, undefined) {
    var _id = 0; //Allow to create new id for each element

    var HoverTitle = {
        init: function(options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);

            self.id = _id++;

            if (typeof options === 'string') {
                self.text = options;
            } else {
                //options is an object
                if (options !== undefined) {
                    self.text = options.text || self.$elem.data('hovertitle');
                } else {
                    self.text = self.$elem.data('hovertitle') || $.fn.HoverTitle.options.text;
                }
            }

            //Merge default options with User options if that exists
            self.options = $.extend({}, $.fn.HoverTitle.options, options);

            //Listen to events
            self.bindEvents();
        },

        bindEvents: function() {
            var self = this;

            self.$elem.on('mousemove', function(e) {
                self.showTitle.call(self.$elem, e, self);
            });

            self.$elem.on('mouseout', function(e) {
                self.hideTitle.call(self.$elem, e, self);
            });
        },

        createBoxTitle: function() {
            return $("<div></div>", {
                class: 'hovertitle-' + this.options.theme,
                id: 'hovertitle-' + this.id,
                html: this.text
            }).appendTo(document.body);
        },

        showTitle: function(e, self) {
            self.cleanUp();

            var box = self.createBoxTitle();

            if (self.options.animation === 'none' || !self.options.animation) {
                box.show(self.options.duration).css({
                    top: e.clientY + 10,
                    left: e.clientX + 10
                });
            } else {
                box[self.options.animation](self.options.duration).css({
                    top: e.clientY + 10,
                    left: e.clientX + 10
                });
            }
        },


        hideTitle: function(e, self) {
            self.cleanUp();
        },

        cleanUp: function() {
            $('div#hovertitle-' + this.id).remove();
        }
    };

    $.fn.HoverTitle = function(options) {
        return this.each(function() {
            var instance = Object.create(HoverTitle);
            instance.init(options, this);
        });
    };

    $.fn.HoverTitle.options = {
        text: null,
        theme: 'default',
        animation: null,
        duration: null
    };

})(jQuery, document);
