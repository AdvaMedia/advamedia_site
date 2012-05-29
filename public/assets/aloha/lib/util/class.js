/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
/*
 * MODIFICATIONS: 
 * * The name of the "constructor" method was changed from "init" to "_constructor"
 * * Mixin Support using https://gist.github.com/1006243
 * * Modified to be a require.js module
 */
define([],function(){var a=!1,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;return this.Class=function(){},Class.extend=function(){function h(){!a&&this._constructor&&this._constructor.apply(this,arguments)}var c=this.prototype;a=!0;var d=new this;a=!1;for(var e=0;e<arguments.length;e++){var f=arguments[e];for(var g in f)d[g]=typeof f[g]=="function"&&typeof c[g]=="function"&&b.test(f[g])?function(a,b){return function(){var d=this._super;this._super=c[a];var e=b.apply(this,arguments);return this._super=d,e}}(g,f[g]):f[g]}return h.prototype=d,h.constructor=h,h.extend=arguments.callee,h},this.Class});