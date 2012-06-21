/*
 * Poshy Tip jQuery plugin v1.1
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2011, Vasil Dinkov, http://vadikom.com/
 */
(function(e){function s(){e.each(t,function(){this.refresh(!0)})}var t=[],n=/^url\(["']?([^"'\)]*)["']?\);?$/i,r=/\.png$/i,i=e.browser.msie&&e.browser.version==6;e(window).resize(s),e.Poshytip=function(t,n){this.$elm=e(t),this.opts=e.extend({},e.fn.poshytip.defaults,n),this.$tip=e(['<div class="',this.opts.className,'">','<div class="tip-inner tip-bg-image"></div>','<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>',"</div>"].join("")).appendTo(document.body),this.$arrow=this.$tip.find("div.tip-arrow"),this.$inner=this.$tip.find("div.tip-inner"),this.disabled=!1,this.content=null,this.init()},e.Poshytip.prototype={init:function(){t.push(this);var n=this.$elm.attr("title");this.$elm.data("title.poshytip",n!==undefined?n:null).data("poshytip",this);if(this.opts.showOn!="none"){this.$elm.bind({"mouseenter.poshytip":e.proxy(this.mouseenter,this),"mouseleave.poshytip":e.proxy(this.mouseleave,this)});switch(this.opts.showOn){case"hover":this.opts.alignTo=="cursor"&&this.$elm.bind("mousemove.poshytip",e.proxy(this.mousemove,this)),this.opts.allowTipHover&&this.$tip.hover(e.proxy(this.clearTimeouts,this),e.proxy(this.mouseleave,this));break;case"focus":this.$elm.bind({"focus.poshytip":e.proxy(this.show,this),"blur.poshytip":e.proxy(this.hide,this)})}}},mouseenter:function(t){if(this.disabled)return!0;this.$elm.attr("title","");if(this.opts.showOn=="focus")return!0;this.clearTimeouts(),this.showTimeout=setTimeout(e.proxy(this.show,this),this.opts.showTimeout)},mouseleave:function(t){if(this.disabled||this.asyncAnimating&&(this.$tip[0]===t.relatedTarget||jQuery.contains(this.$tip[0],t.relatedTarget)))return!0;var n=this.$elm.data("title.poshytip");n!==null&&this.$elm.attr("title",n);if(this.opts.showOn=="focus")return!0;this.clearTimeouts(),this.hideTimeout=setTimeout(e.proxy(this.hide,this),this.opts.hideTimeout)},mousemove:function(e){if(this.disabled)return!0;this.eventX=e.pageX,this.eventY=e.pageY,this.opts.followCursor&&this.$tip.data("active")&&(this.calcPos(),this.$tip.css({left:this.pos.l,top:this.pos.t}),this.pos.arrow&&(this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow))},show:function(){if(this.disabled||this.$tip.data("active"))return;this.reset(),this.update(),this.display(),this.opts.timeOnScreen&&setTimeout(e.proxy(this.hide,this),this.opts.timeOnScreen)},hide:function(){if(this.disabled||!this.$tip.data("active"))return;this.display(!0)},reset:function(){this.$tip.queue([]).detach().css("visibility","hidden").data("active",!1),this.$inner.find("*").poshytip("hide"),this.opts.fade&&this.$tip.css("opacity",this.opacity),this.$arrow[0].className="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left",this.asyncAnimating=!1},update:function(e,t){if(this.disabled)return;var n=e!==undefined;if(n){t||(this.opts.content=e);if(!this.$tip.data("active"))return}else e=this.opts.content;var r=this,i=typeof e=="function"?e.call(this.$elm[0],function(e){r.update(e)}):e=="[title]"?this.$elm.data("title.poshytip"):e;this.content!==i&&(this.$inner.empty().append(i),this.content=i),this.refresh(n)},refresh:function(t){if(this.disabled)return;if(t){if(!this.$tip.data("active"))return;var s={left:this.$tip.css("left"),top:this.$tip.css("top")}}this.$tip.css({left:0,top:0}).appendTo(document.body),this.opacity===undefined&&(this.opacity=this.$tip.css("opacity"));var o=this.$tip.css("background-image").match(n),u=this.$arrow.css("background-image").match(n);if(o){var a=r.test(o[1]);i&&a?(this.$tip.css("background-image","none"),this.$inner.css({margin:0,border:0,padding:0}),o=a=!1):this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({border:0,padding:0,"background-image":"none","background-color":"transparent"}).find(".tip-bg-image").css("background-image",'url("'+o[1]+'")').end().find("td").eq(3).append(this.$inner),a&&!e.support.opacity&&(this.opts.fade=!1)}u&&!e.support.opacity&&(i&&r.test(u[1])&&(u=!1,this.$arrow.css("background-image","none")),this.opts.fade=!1);var f=this.$tip.find("table");if(i){this.$tip[0].style.width="",f.width("auto").find("td").eq(3).width("auto");var l=this.$tip.width(),c=parseInt(this.$tip.css("min-width")),h=parseInt(this.$tip.css("max-width"));!isNaN(c)&&l<c?l=c:!isNaN(h)&&l>h&&(l=h),this.$tip.add(f).width(l).eq(0).find("td").eq(3).width("100%")}else f[0]&&f.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView&&document.defaultView.getComputedStyle&&parseFloat(document.defaultView.getComputedStyle(this.$tip[0],null).width)||this.$tip.width()).find("td").eq(3).width("100%");this.tipOuterW=this.$tip.outerWidth(),this.tipOuterH=this.$tip.outerHeight(),this.calcPos(),u&&this.pos.arrow&&(this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow,this.$arrow.css("visibility","inherit"));if(t){this.asyncAnimating=!0;var p=this;this.$tip.css(s).animate({left:this.pos.l,top:this.pos.t},200,function(){p.asyncAnimating=!1})}else this.$tip.css({left:this.pos.l,top:this.pos.t})},display:function(t){var n=this.$tip.data("active");if(n&&!t||!n&&t)return;this.$tip.stop();if((this.opts.slide&&this.pos.arrow||this.opts.fade)&&(t&&this.opts.hideAniDuration||!t&&this.opts.showAniDuration)){var r={},i={};if(this.opts.slide&&this.pos.arrow){var s,o;this.pos.arrow=="bottom"||this.pos.arrow=="top"?(s="top",o="bottom"):(s="left",o="right");var u=parseInt(this.$tip.css(s));r[s]=u+(t?0:this.pos.arrow==o?-this.opts.slideOffset:this.opts.slideOffset),i[s]=u+(t?this.pos.arrow==o?this.opts.slideOffset:-this.opts.slideOffset:0)+"px"}this.opts.fade&&(r.opacity=t?this.$tip.css("opacity"):0,i.opacity=t?0:this.opacity),this.$tip.css(r).animate(i,this.opts[t?"hideAniDuration":"showAniDuration"])}t?this.$tip.queue(e.proxy(this.reset,this)):this.$tip.css("visibility","inherit"),this.$tip.data("active",!n)},disable:function(){this.reset(),this.disabled=!0},enable:function(){this.disabled=!1},destroy:function(){this.reset(),this.$tip.remove(),delete this.$tip,this.content=null,this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"),t.splice(e.inArray(this,t),1)},clearTimeouts:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0),this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},calcPos:function(){var t={l:0,t:0,arrow:""},n=e(window),r={l:n.scrollLeft(),t:n.scrollTop(),w:n.width(),h:n.height()},i,s,o,u,a,f;if(this.opts.alignTo=="cursor")i=s=o=this.eventX,u=a=f=this.eventY;else{var l=this.$elm.offset(),c={l:l.left,t:l.top,w:this.$elm.outerWidth(),h:this.$elm.outerHeight()};i=c.l+(this.opts.alignX!="inner-right"?0:c.w),s=i+Math.floor(c.w/2),o=i+(this.opts.alignX!="inner-left"?c.w:0),u=c.t+(this.opts.alignY!="inner-bottom"?0:c.h),a=u+Math.floor(c.h/2),f=u+(this.opts.alignY!="inner-top"?c.h:0)}switch(this.opts.alignX){case"right":case"inner-left":t.l=o+this.opts.offsetX,t.l+this.tipOuterW>r.l+r.w&&(t.l=r.l+r.w-this.tipOuterW);if(this.opts.alignX=="right"||this.opts.alignY=="center")t.arrow="left";break;case"center":t.l=s-Math.floor(this.tipOuterW/2),t.l+this.tipOuterW>r.l+r.w?t.l=r.l+r.w-this.tipOuterW:t.l<r.l&&(t.l=r.l);break;default:t.l=i-this.tipOuterW-this.opts.offsetX,t.l<r.l&&(t.l=r.l);if(this.opts.alignX=="left"||this.opts.alignY=="center")t.arrow="right"}switch(this.opts.alignY){case"bottom":case"inner-top":t.t=f+this.opts.offsetY;if(!t.arrow||this.opts.alignTo=="cursor")t.arrow="top";t.t+this.tipOuterH>r.t+r.h&&(t.t=u-this.tipOuterH-this.opts.offsetY,t.arrow=="top"&&(t.arrow="bottom"));break;case"center":t.t=a-Math.floor(this.tipOuterH/2),t.t+this.tipOuterH>r.t+r.h?t.t=r.t+r.h-this.tipOuterH:t.t<r.t&&(t.t=r.t);break;default:t.t=u-this.tipOuterH-this.opts.offsetY;if(!t.arrow||this.opts.alignTo=="cursor")t.arrow="bottom";t.t<r.t&&(t.t=f+this.opts.offsetY,t.arrow=="bottom"&&(t.arrow="top"))}this.pos=t}},e.fn.poshytip=function(t){if(typeof t=="string"){var n=arguments,r=t;return Array.prototype.shift.call(n),r=="destroy"&&this.die("mouseenter.poshytip").die("focus.poshytip"),this.each(function(){var t=e(this).data("poshytip");t&&t[r]&&t[r].apply(t,n)})}var i=e.extend({},e.fn.poshytip.defaults,t);e("#poshytip-css-"+i.className)[0]||e(['<style id="poshytip-css-',i.className,'" type="text/css">',"div.",i.className,"{visibility:hidden;position:absolute;top:0;left:0;}","div.",i.className," table, div.",i.className," td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}","div.",i.className," td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:",i.bgImageFrameSize,"px;width:",i.bgImageFrameSize,"px;overflow:hidden;}","div.",i.className," td.tip-right{background-position:100% 0;}","div.",i.className," td.tip-bottom{background-position:100% 100%;}","div.",i.className," td.tip-left{background-position:0 100%;}","div.",i.className," div.tip-inner{background-position:-",i.bgImageFrameSize,"px -",i.bgImageFrameSize,"px;}","div.",i.className," div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}","</style>"].join("")).appendTo("head");if(i.liveEvents&&i.showOn!="none"){var s=e.extend({},i,{liveEvents:!1});switch(i.showOn){case"hover":this.live("mouseenter.poshytip",function(){var t=e(this);t.data("poshytip")||t.poshytip(s).poshytip("mouseenter")});break;case"focus":this.live("focus.poshytip",function(){var t=e(this);t.data("poshytip")||t.poshytip(s).poshytip("show")})}return this}return this.each(function(){new e.Poshytip(this,i)})},e.fn.poshytip.defaults={content:"[title]",className:"tip-yellow",bgImageFrameSize:10,showTimeout:500,hideTimeout:100,timeOnScreen:0,showOn:"hover",liveEvents:!1,alignTo:"cursor",alignX:"right",alignY:"top",offsetX:-22,offsetY:18,allowTipHover:!0,followCursor:!1,fade:!0,slide:!0,slideOffset:8,showAniDuration:300,hideAniDuration:300}})(jQuery);