/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.3-pre
 * 
 * Requires: 1.2.2+
 */
(function(a){function c(b){var c=[].slice.call(arguments,1),d=0,e=!0;return b=a.event.fix(b||window.event),b.type="mousewheel",b.wheelDelta&&(d=b.wheelDelta/120),b.detail&&(d=-b.detail/3),c.unshift(b,d),a.event.handle.apply(this,c)}var b=["DOMMouseScroll","mousewheel"];a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],c,!1);else this.onmousewheel=c},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],c,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);