/*!
 * jQuery viewport events plugin (jquery.vp.js)
 * Original author: Pachito Marco Calabrese - pm.calabrese@gmail.com
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {
	$.fn.vp = function (options) {
		return this.each(function (i, el) {
			var base = el;
			var	$base = $(el);
			var o = {
                method : options.method || "",
				triggerOnLoad: options.triggerOnLoad || false,
				offset: options.offset || 0,
                speed: options.speed || 100,
                easing: options.easing || 'swing'
			};
            if (o.method === "scrollInView") {
                var s = base.getBoundingClientRect();
                if(typeof o.offset === "string") {
                    if(o.offset === "center") {
                        o.offset = window.innerHeight/2-(s.bottom - s.top)/2;
                    }
                }
                var es = s.top-o.offset;
                $('body').animate({scrollTop:es}, o.speed, o.easing, function() {
                    if (typeof options.callback == "function") {
                        options.callback(es);
                    }
                });
                return;
            }
			base.init = function () {
				var cp = "";
				var bounding = base.getBoundingClientRect();
				var h = bounding.bottom - bounding.top;
				var b = window.innerHeight - bounding.top;
				var t = bounding.top + h;
				$(window)
					.load(function () {
					if (b < 0 && cp != "below") {
						cp = "below";
						if (o.triggerOnLoad) base.below();
					} else if (t < 0 && cp != "above") {
						cp = "above";
						if (o.triggerOnLoad) base.above();
					} else {
						cp = "view";
						if (o.triggerOnLoad) base.view();
					}
				})
					.scroll(function () {
					bounding = base.getBoundingClientRect();
					h = bounding.bottom - bounding.top;
					b = window.innerHeight - bounding.top + o.offset;
					t = bounding.top + h + o.offset;
					if (b < 0 && cp != "below") {
						cp = "below";
						base.below();
					} else if (t < 0 && cp != "above") {
						cp = "above";
						base.above();
					} else if (b > 0 && t > 0 && cp != "view") {
						cp = "view";
						base.view();
					}
				});
			};
			base.below = function () {
				$base.trigger("belowViewPort");
			};
			base.above = function () {
				$base.trigger("aboveViewPort");
			};
			base.view = function () {
				$base.trigger("inViewPort");
			};
			base.init();
		});
	};
})( jQuery, window, document );