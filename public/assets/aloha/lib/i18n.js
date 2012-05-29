/**
 * @license RequireJS i18n 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*jslint regexp: false, nomen: false, plusplus: false, strict: false */
/*global require: false, navigator: false, define: false */
/**
 * This plugin handles i18n! prefixed modules. It does the following:
 *
 * 1) A regular module can have a dependency on an i18n bundle, but the regular
 * module does not want to specify what locale to load. So it just specifies
 * the top-level bundle, like "i18n!nls/colors".
 *
 * This plugin will load the i18n bundle at nls/colors, see that it is a root/master
 * bundle since it does not have a locale in its name. It will then try to find
 * the best match locale available in that master bundle, then request all the
 * locale pieces for that best match locale. For instance, if the locale is "en-us",
 * then the plugin will ask for the "en-us", "en" and "root" bundles to be loaded
 * (but only if they are specified on the master bundle).
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/colors bundle to be that mixed in locale.
 *
 * 2) A regular module specifies a specific locale to load. For instance,
 * i18n!nls/fr-fr/colors. In this case, the plugin needs to load the master bundle
 * first, at nls/colors, then figure out what the best match locale is for fr-fr,
 * since maybe only fr or just root is defined for that locale. Once that best
 * fit is found, all of its locale pieces need to have their bundles loaded.
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/fr-fr/colors bundle to be that mixed in locale.
 */
(function(){function b(a,b,c,d,e,f){b[a]&&(c.push(a),(b[a]===!0||b[a]===1)&&d.push(e+a+"/"+f))}function c(a,b,c,d,e){var f=d+b+"/"+e;require._fileExists(a.nameToUrl(f,null))&&c.push(f)}var a=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;define({version:"0.24.0",load:function(d,e,f,g){g=g||{};var h,i=a.exec(d),j=i[1],k=i[4],l=i[5],m=k.split("-"),n=[],o={},p,q,r="";i[5]?(j=i[1],h=j+l):(h=d,l=i[4],k=g.locale||(g.locale=typeof navigator=="undefined"?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),m=k.split("-"));if(g.isBuild){n.push(h),c(e,"root",n,j,l);for(p=0;q=m[p];p++)r+=(r?"-":"")+q,c(e,r,n,j,l);e(n),f()}else e([h],function(a){var c=[];b("root",a,c,n,j,l);for(p=0;q=m[p];p++)r+=(r?"-":"")+q,b(r,a,c,n,j,l);e(n,function(){var b,d;for(b=c.length-1;b>-1&&(q=c[b]);b--){d=a[q];if(d===!0||d===1)d=e(j+q+"/"+l);require.mixin(o,d)}o.t=function(a){return this[a]?this[a]:a},f(o)})})}})})();