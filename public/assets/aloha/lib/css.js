/**
 * Copyright (c) 2010 unscriptable.com
 */
/*jslint browser:true, on:true, sub:true */
(function(a){function j(a){return h[a]}function k(a,d){var e=a.link;e[b]=e[c]=function(){if(!e.readyState||e.readyState=="complete")h["event-link-onload"]=!0,t(a),d()}}function l(a,b){return a.lastIndexOf(".")<=a.lastIndexOf("/")?a+"."+b:a}function m(a){var b=a.split("!"),c,d=1,e;while(c=b[d++])e=c.split("=",2),b[e[0]]=e.length==2?e[1]:!0;return b}function n(a,b){var c=a[d]("link");return c.rel="stylesheet",c.type="text/css",b&&(c.href=b),c}function p(){return o||(o=a[d]("div"),o.id="_cssx_load_test",o.style.cssText="position:absolute;top:-999px;left:-999px;",a.body.appendChild(o)),a.defaultView.getComputedStyle(o,null).marginTop=="-5px"}function q(a){var b,c,d=!1;try{b=a.sheet||a.styleSheet,c=b.cssRules||b.rules,d=c?c.length>0:c!==f,d&&navigator.userAgent.indexOf("Chrome")>=0&&(b.insertRule("#_cssx_load_test{margin-top:-5px;}",0),d=p(),b.deleteRule(0))}catch(e){d=e.code==1e3||e.message.match(/security|denied/i)}return d}function r(a,b){q(a.link)?(t(a),b()):e||setTimeout(function(){r(a,b)},a.wait)}function s(a,b){function d(){c||(c=!0,b())}var c;k(a,d),j("event-link-onload")||r(a,d)}function t(a){var d=a.link;d[b]=d[c]=null}var b="onreadystatechange",c="onload",d="createElement",e=!1,f,g={},h={},i=a.head||(a.head=a.getElementsByTagName("head")[0]);require.onError&&(require.onError=function(a){return function(){e=!0,a.apply(this,arguments)}}(require.onError));var o,u={load:function(b,c,d,e){function j(){--h==0&&setTimeout(function(){d(t)},0)}var f=b.split(","),h=f.length;for(var k=f.length-1,o;k>=0;k--,o=r){b=f[k];var p=m(b),q=p.shift(),r=c.toUrl(l(q,"css")),t=n(a),u="nowait"in p?p["nowait"]!="false":!!e.cssDeferLoad,v={link:t,url:r,wait:e.cssWatchPeriod||50};u?d(t):s(v,j),t.href=r,o?i.insertBefore(t,g[o].previousSibling):i.appendChild(t),g[r]=t}},nameWithExt:l,parseSuffixes:m,createLink:n};define(u)})(document);